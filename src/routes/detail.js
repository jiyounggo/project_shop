import { useState } from 'react';
import { Link } from 'react-router-dom';


function Detail(){
  let [modal, setModal] = useState(true);

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
      </div> 

      
    )
  }
  
  export default Detail