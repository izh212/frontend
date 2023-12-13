import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState, useRef } from "react";
import axios from "axios";
function Update() {
  const name = useRef();
  const phone = useRef();
  const email = useRef();

  const [oldEmail, setoldEmail] = useState("");

  const handleSubmit = (e) => {
    const data = {
      name: name.current.value,
      phone: phone.current.value,
      email: email.current.value,
    };
    axios({
      method: "put",
      url: "http://localhost:3001/"+oldEmail,
      headers: {},
      data: data,
    });
  };

const getone = async() => {
    const mail =  prompt("Enter Email of Employee to get details")
   const employee = await axios({
        method: 'get',
        url: 'http://localhost:3001/' + mail,
      });
        name.current.value = employee.data[0].name
        phone.current.value = employee.data[0].phone
        email.current.value = employee.data[0].email
        setoldEmail(employee.data[0].email)

}
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
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={email} placeholder="Email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
        <Button variant="primary" type="button" onClick={getone}>
          Get Details
        </Button>
      </Form>
    </Container>
  );
}

export default Update;
