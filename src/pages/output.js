import { useState, useEffect, createContext } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import socketClient from '../utils/socketClient';

const NewUser = () => {
  const socket = socketClient.getInstance();
  socket.on('output_number_web', (data) => {
    addNumber(data);
  });
  const [form, setForm] = useState({ name: '', number: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        deleteUser();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const deleteUser = async () => {
    try {
      const deleted = await fetch(
        `http://localhost:3000/api/users/${form.number}`,
        {
          method: 'DELETE',
        },
      );
      setForm({
        number: '',
        name: '',
      });
      setIsSubmitting(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const addNumber = async (number) => {
    const res = await fetch(`http://localhost:3000/api/users/${number}`);
    const { data } = await res.json();
    if (data) {
      setForm({
        number: data.number,
        name: data.name,
      });
    }
  };

  const validate = () => {
    let err = {};
    if (!form.number) {
      err.number = 'Number is required';
    }
    return err;
  };

  return (
    <div className="form-container">
      <h1>Find User</h1>
      <div>
        {isSubmitting ? (
          <Loader active inline="centered" />
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Input
              error={
                errors.number
                  ? { content: 'Please enter a number', pointing: 'below' }
                  : null
              }
              label="Number"
              placeholder="Number"
              name="number"
              value={form.number ? form.number : ''}
            />
            <Form.Input
              label="Name"
              placeholder="Name"
              name="name"
              value={form.name ? form.name : ''}
            />
            <Button type="submit">Delete</Button>
            <Button type="button" onClick={() => router.push('/')}>
              Exit
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default NewUser;
