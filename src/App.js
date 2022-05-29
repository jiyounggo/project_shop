import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route,Link} from 'react-router-dom';
import {Navbar ,Nav, Container,NavDropdown} from 'react-bootstrap'
import Detail from './routes/detail.js';
import Cart from  './routes/cart.js';
import data from './data.js';
import { useState } from 'react';
import axios from 'axios';

function App() {
  let [shoes] = useState(data)
  let[버튼,버튼변경]=useState(0);
  let [ pat,par]=useState(data);
  let [새로,새로저장]=useState(data);
  return (
    <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link to="/"> <Nav.Link href="#home">Home</Nav.Link></Link>
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
    { 
     pat.map((a,i)=>{
       return <Card pat={pat[i]} i={i+1}></Card>
     })
   } 
    <button onClick={()=>{
      버튼변경(버튼+1)
    }}>더보기</button>
     <Clicks 버튼={버튼} shoes={shoes} par={par} ></Clicks>
   </div> 
    }/>
      <Route path="/detail0" element={<Detail/> } />
      <Route path="/cart" element={ <Cart/> } />
    </Routes>
    </div>
  )
}
function Clicks(props){

  if(props.버튼==1){
    axios.get('https://codingapple1.github.io/shop/data2.json')
  .then((결과)=>{
    let copy=[...props.shoes, ...결과.data];
    props.par(copy);
  }) 
  
}if(props.버튼==2){
  axios.get('https://codingapple1.github.io/shop/data3.json')
.then((결과)=>{
  let copy=[...props.shoes,...결과.data,...결과.data];
  props.par(copy);
}) 
}
if(props.버튼==3){
 return "상품이 더 없습니다"
  }
}
function Card(props){
  return(
    <div className="plus">
    <Link to ="/detail/1"><img src={process.env.PUBLIC_URL+'img/clothes'+props.i+'.png'}></img></Link>
    <Link to ="/detail/1"><h4>{props.pat.title}</h4></Link>
    <Link to ="/detail/1"><p>{props.pat.price}</p></Link>
    </div>
  )
}
export default App;
