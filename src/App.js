import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route,Link} from 'react-router-dom';
import {Navbar ,Nav, Container,NavDropdown} from 'react-bootstrap'
import Detail from './routes/detail.js';
import Cart from  './routes/cart.js';
import data from './data.js';
import { useState } from 'react';

function App() {
  let [shoes , setShoese] = useState(data)
 
  return (
    <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Routes>
      <Route path="/" element={
    <div>
   <Link to="/detail0">
    <Card shoes={shoes[0]} i={1}/></Link>
    <Card shoes={shoes[1]} i={2}/>
    <Card shoes={shoes[2]} i={3}/>
    </div>
    
    
    }/>
      <Route path="/detail0" element={<Detail/> } />
      <Route path="/cart" element={ <Cart/> } />
    </Routes>




    </div>
  )
}


function Card(props){
  return(
  
<div className="container">
  <div className="row">
    <div className="col-md-4"> 
    <img src={'https://codingapple1.github.io/shop/shoes'+ props.i+'.jpg'}></img>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
    </div>
    
   
  </div>
</div> 


  )
}


export default App;
