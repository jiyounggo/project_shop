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
  let [please,zez]=useState([]);
 
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
       return   <Link to={`/detail/${a.id}`}><Card pat={pat[i]} i={i+1}></Card></Link>
     })
     
   } 
     { 
     please.map((a,i)=>{
       return <Card2 please={please[i]} i={i+7}></Card2>
     })
     
   } 
 
    <button onClick={()=>{
      버튼변경(버튼+1)
    }}>더보기</button>
     <Clicks 버튼={버튼} shoes={shoes} par={par} zez={zez}></Clicks>
   </div> 
    }/>
      <Route path="/detail/:id" element={<Detail shoes={shoes}/> } />
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
  let copy=[...결과.data];
  props.zez(copy);
  
}) 
 }
if(props.버튼==3){
 return "상품이 더 없습니다"
  }
}
function Card(props){
  return(
    <div className="plus">
    <img src={process.env.PUBLIC_URL+'img/clothes'+props.i+'.png'}></img>
  <h4>{props.pat.title}</h4>
  <p>{props.pat.content}</p>
    </div>
  )
}
function Card2(props){
  return(
    <div className="plus">
    <img src={process.env.PUBLIC_URL+'img/clothes'+props.i+'.png'}></img>
  <h4>{props.please.title}</h4>
  <p>{props.please.content}</p>
    </div>
  )
}
export default App;
