import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { createLeague } from '../helpers/LeagueHelper';

const LeagueEditForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(title, []);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      <h2>Add new league</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>League title</Form.Label>
          <Form.Control
            type="text"
            placeholder="League title"
            value={title}
            onChange={handleTitleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </>
  );
};

export default LeagueEditForm;
