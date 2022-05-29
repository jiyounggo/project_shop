import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Nav,Card,ListGroup} from 'react-bootstrap'

function Detail(){
  let [modal, setModal] = useState(true);
  let [탭 , 탭변경]=useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{ setAlert(false) }, 2000)
  }, [])

    return ( 
     
        <div className="container">
           {
        alert == true
        ? <div className="alert alert-warning">
          로딩중
          </div>
        : null
      }
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
    let [입력값,입력값변경]=useState("");
    let [글제목,글제목변경]=useState(["안녕","반가","나난"]);

    if(props.탭==0){
      return <div>내용0</div>
    }if(props.탭==1){
      return <div>내용1</div>
    }if(props.탭==2){
      return <div> 
       <form onSubmit={(e)=>{
         e.preventDefault();
         if(입력값===""){
          alert("글자를 입력하세요")
         return
         }else{
        글제목변경([입력값,...글제목])
        입력값변경("");
         }
         
       }}>
      <input onChange={(e)=>{입력값변경(e.target.value)}} value={입력값}></input>
      <button onClick={()=>{
        // let copy = [...글제목];
        // copy.unshift(입력값);
        // 글제목변경(copy);
      }}>댓글</button>
       </form>
  {  
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4>{ 글제목[i] }</h4>
            <button onClick={()=>{ 
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);
           }}>삭제</button>
         
          </div> 
          )
        })      
}
      </div>
    }if(props.탭==3){
      return <div>내용3</div>
  }
}
  
  export default Detail