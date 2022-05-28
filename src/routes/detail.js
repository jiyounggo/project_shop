import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap'

function Detail(){
  let [modal, setModal] = useState(true);
  let [탭 , 탭변경]=useState(0);


    return ( 
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <Link to="/cart"><button className="btn btn-danger">주문하기</button> </Link>
          </div>
        </div>
        <div>
      {
        modal==true?<div>이번주까지 50% 할인</div>:null
      }
      </div>
      <div>
      <button onClick={()=>{
          setModal(!modal)
      }}>X</button>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>{
        탭변경(0)
      }}>상세정보</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1" onClick={()=>{
        탭변경(1)
      }}>리뷰</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2" onClick={()=>{
        탭변경(2)
      }}>Q&A</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link3" onClick={()=>{
        탭변경(3)
      }}>반품/교환정보</Nav.Link>
    </Nav.Item>
</Nav>
<Tabcontent 탭={탭}/>

      </div> 

      
    )
  }

  function Tabcontent(props){
    if(props.탭==0){
      return <div>내용0</div>
    }if(props.탭==1){
      return <div>내용1</div>
    }if(props.탭==2){
      return <div>내용2</div>
    }if(props.탭==3){
      return <div>내용3</div>
  }
}
  
  export default Detail