import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route,Link} from 'react-router-dom';
import {Navbar ,Nav, Container,NavDropdown,Row,Col} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './routes/detail.js';
import Cart from  './routes/cart.js';
import data from './data.js';

import { useState } from 'react';
import axios from 'axios';

function App() {

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };


  let [shoes] = useState(data);
  
  let [버튼,버튼변경] = useState(0);
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
      <div>
     <Slider {...settings}>
    <img src="img/backgroundimg.png"  height="400px" />
    <img src="img/bg.png"  height="400px"/>
    <img src="img/backgroundimg.png"  height="400px"/>
    </Slider>
    </div>
{/* 
    <div><Product  margin-button="20px"></Product></div> */}
  <div className="item">
  { 
    pat.map((a,i)=>{
       return  <div className="items"  key={i}> 
       <Link to={`/detail/${a.id}`}><Card pat={pat[i]} i={i}></Card></Link></div>
     })
     
   } 
   </div>
   <div  className="item">
     { 
     please.map((a,i)=>{
       return <div className="items2" key={i}>
        <Link to={`/detail/${a.id}`}><Card2 please={please[i]} i={i+7}></Card2></Link></div>
     })

   } 
   </div>
 
    <button onClick={()=>{
      버튼변경(버튼+1)
    }}>더보기</button>
     <Clicks 버튼={버튼} shoes={shoes} par={par} zez={zez}></Clicks>
   </div> 
    }/>
      <Route path="/detail/:id" element={<Detail pat={pat}/> } />
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
    console.log(props.pat)
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
    <div >
     <img className="itemIMG" src={process.env.PUBLIC_URL+'img/clothes'+props.i+'.png'}></img>
      <h4>{props.pat.title}</h4>
      <p>{props.pat.content}</p>
      </div>

  )
}
function Card2(props){
  return(
  <div>
  <img src={process.env.PUBLIC_URL+'img/clothes'+props.i+'.png'}></img>
  <h4>{props.please.title}</h4>
  <p>{props.please.content}</p>
    </div>
  )
}
export default App;
