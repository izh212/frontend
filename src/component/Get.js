import {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'axios'
import  axios  from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Get() {
const [employees, setEmployees] = useState([])
const getAll = async() => {
    axios.get('http://localhost:3001/').then((response) => {
        setEmployees(response.data)
})
}

const getone = async() => {
    const mail =  prompt("Enter Email of Employee to get details")
    if (mail === '') 
    {
      setEmployees([])
      return
    }
    axios.get('http://localhost:3001/' + mail).then((response) => {
        setEmployees(response.data)
})
}
  return (
    <Container>
        <h1 className='mt-10'>Employees</h1>
        <Row>
        { employees.map((employee) => (<Display name={employee.name} email={employee.email} phone={employee.phone} key={employee._id}/>
    
        ))}

</Row>
            <Button onClick={getAll}>Get All Employees</Button>   
            <Button onClick={getone}>Get One Employee</Button>   
    </Container>
  )
}

function Display({name, email, phone}) {
    return (
        <Col>
        <Card data-bs-theme="dark">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Email : {email}</Card.Text>
            <Card.Text>Phone : {phone}</Card.Text>
          </Card.Body>
        </Card>

        </Col>
      );

}

export default Get