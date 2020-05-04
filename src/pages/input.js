import { useState, useEffect, createContext } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import socketClient from '../utils/socketClient';

const NewUser = () => {
  const socket = socketClient.getInstance();
  socket.on('input_number_web', (data) => {
    addNumber(data);
  });
  const [form, setForm] = useState({ name: '', number: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createUser();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createUser = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok === false) {
        alert('License plate already exists');
			}
			setForm({
				number: '',
			});
      setIsSubmitting(false);
    } catch (error) {
      console.log('error', err.response);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addNumber = (data) => {
    setForm({
      number: data,
    });
  };

  const validate = () => {
    let err = {};
    if (!form.name) {
      err.name = 'Name is required';
    }
    if (!form.number) {
      err.number = 'Number is required';
    }
    return err;
  };

  return (
    <div className="form-container">
      <h1>Create User</h1>
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
              error={
                errors.name
                  ? { content: 'Please enter a name', pointing: 'below' }
                  : null
              }
              label="Name"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
						<Button className="button" type="button" onClick={() => router.push('/')}>Exit</Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default NewUser;
