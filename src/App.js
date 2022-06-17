import { useState ,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route,Link} from 'react-router-dom';
import {Navbar ,Nav, Container,NavDropdown} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './routes/detail.js';
import Cart from  './routes/cart.js';
import data from './data.js';


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
  let [modal, setModal] = useState(true);
  let [buttons,setbuttons] = useState(true);
 
  return (
  <div>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link to="/"> Home</Link>
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
 <div>

 </div>
<Routes>
  <Route path="/" element={
    <div>
      <div>
     <Slider {...settings}>
    <img src="img/backgroundimg.png"  height="600px" />
    <img src="img/bg.png"  height="600px"/>
    <img src="img/backgroundimg.png"   height="600px"/>
    </Slider>
    </div>

    <div className="popular_item">
    <img src="img/mainclothes.png"  height="400px" />
    <img src="img/mainclothes2.png"  height="400px" />
    <img src="img/mainclothes3.png"  height="400px" />
    </div>


  <div className="item">
    { 
     pat.map((a,i)=>{
       return  <div className="items"  key={i}> 
       <Link className="text-link" to={`/detail/${a.id}`}><Card pat={pat[i]} i={i}></Card></Link></div>
     })
   
   } 
   </div>

    <button  variant="outline-secondary" onClick={()=>{
      버튼변경(버튼+1)
    }}>더보기</button>
     <Clicks 버튼={버튼} shoes={shoes} par={par} ></Clicks>

     <div>
     <div className="coupon">
      {
        modal==true?<div>이번주까지 50% 할인<button onClick={()=>{
          setModal(!modal)
      }}>삭제</button></div>:null
      }

      </div>
      <div>
      </div>
      </div>

  </div> 
    }/>
      <Route path="/detail/:id" element={<Detail pat={pat}/> } />
      <Route path="/cart" element={ <Cart/> } />
    </Routes>
    </div>
  )
}
function Clicks(props){
  useEffect(()=>{
    if(props.버튼==1){
      axios
      .all([axios.get('https://codingapple1.github.io/shop/data2.json')
        ,axios.get('https://codingapple1.github.io/shop/data3.json')])
     .then(
      axios.spread((res1,res2)=>{
        const rest = res1.data;
        const resr = res2.data;
        const res = [...props.shoes, ...rest, ...resr];
        const resp =res.slice(0,6);
        props.par(resp);
      })
    ) 
  }
  if(props.버튼==2){
    axios
    .all([axios.get('https://codingapple1.github.io/shop/data2.json')
      ,axios.get('https://codingapple1.github.io/shop/data3.json')])
   .then(
    axios.spread((res1,res2)=>{
      const rest = res1.data;
      const resr = res2.data;
      const res = [...props.shoes,...rest, ...resr];
      props.par(res)
    })
  )  
  }
  }, [props.버튼])

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

export default App;