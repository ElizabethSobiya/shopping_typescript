import {Navbar,Nav, Container, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <Navbar sticky='top' className='bg-success shadow-sm mb-3'>
      <Container>
      <Nav className='me-auto ' >
        <Nav.Link to ='/' as={NavLink}>Home</Nav.Link>
        <Nav.Link to ='/' as={NavLink}>Store</Nav.Link>
        <Nav.Link to ='/' as={NavLink}>About</Nav.Link>
      </Nav>
     <Button style ={{width:'3rem', height:'3rem', position:'relative'}} variant="outline-warning" className='rounded-circle'>
      <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"/>
      <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
      style={{color:'white', width:'1.5rem', height:'1.5rem', position:'absolute', bottom: 0, right:0, transform:'translate(25%, 25%)'}}>
       3
      </div>
      </Button>
      </Container>
    </Navbar>
  )
}

export default NavBar