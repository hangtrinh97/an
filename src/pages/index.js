import Link from 'next/link';
import { Button } from 'semantic-ui-react';

const Index = () => {
  return (
    <div className="notes-container">
      <h1>Select Function</h1>
      <Link href={`/input`}>
        <Button primary>Input</Button>
      </Link>
      <Link href={`/output`}>
        <Button primary>Output</Button>
      </Link>
    </div>
  );
};

export default Index;
