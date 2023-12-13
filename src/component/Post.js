import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import {useRef } from "react";
import axios from "axios";

function Post() {
  const name = useRef();
  const phone = useRef();
  const email = useRef();

  const handleSubmit = (e) => {

    const data = {
      name: name.current.value,
      phone: phone.current.value,
      email: email.current.value,
    };
    axios({
        method: 'post',
        url: 'http://localhost:3001/',
        headers: {}, 
        data: data
      });
  };

  return (
    <Container className="mt-5" data-bs-theme="dark">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={name} placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" ref={phone} placeholder="Phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={email} placeholder="Email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Post;
