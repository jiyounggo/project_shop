import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'bootstrap';
import { useState } from 'react';
import { Table} from 'react-bootstrap'
import styled from 'styled-components'
import { useSelector,useDispatch } from "react-redux"
import {  addCount,multiply,addItem } from "./../store.js"
import { Link, useParams } from 'react-router-dom';

let Box = styled.div`
  color : grey;
  padding : 20px;
  width:80%;
  text-align : center;
  margin:20px;
`;

function Cart(props){
  let [Total, setTotal] = useState(0 );
  let state = useSelector((state) => { return state } )
  // let states = 
  // useSelector((state) => { return state.cart[0].price *state.cart[0].count})
  // let states1 = useSelector((state) => { return state.cart[1].price *state.cart[1].count})
  let dispatch = useDispatch ();

  let total=state.cart.reduce((accu,cart)=>
  accu + (cart.price * cart.count),0)
  console.log(total)
 

  
  return (
 <Box>

  <Table striped>

  <thead>
    <tr>
      <th>상품번호</th>
      <th>상품정보</th>
      <th>판매가</th>
      <th>수량</th>
      <th>갯수</th>
     
    </tr>
  </thead>
  <tbody>
  {
    state.cart.map((a, i)=>(
      <tr key={i}>
        <td>{state.cart[i].id}</td>
        <td>{state.cart[i].name}</td>
        <td>{state.cart[i].price * state.cart[i].count}</td>
        <td>{state.cart[i].count}</td>
        <td><button onClick={()=>{
         dispatch(addCount(state.cart[i].id))
       
        //  let total =(`${state.cart[i].price * state.cart[i].count}`)
      
       
        }}>+</button></td>
      </tr>
     ))
   }
 
 {total}

  </tbody>
</Table>

   </Box>
 
  )
  }

export default Cart