import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'bootstrap';
import { useState } from 'react';
import { Table} from 'react-bootstrap'
import styled from 'styled-components'

let Box = styled.div`
  color : grey;
  padding : 20px;
  width:80%;
  text-align : center;
  margin:20px;
`;
function Cart(){

  let [따봉,따봉변경]=useState(0);
  let [따봉1, 따봉변경1] = useState(0);
  let [삭제,삭제변경] = useState(true);
  let [삭제1,삭제변경1] =useState(true);
  return (
 <Box>
  <Table striped>
  <thead>
    <tr>
      <th>이미지</th>
      <th>상품정보</th>
      <th>판매가</th>
      <th>수량</th>
      <th>갯수</th>
      <th>배송비</th>
      <th>합계</th>
      <th>선택</th>
      <th>삭제</th>
    </tr>
  </thead>
  <tbody>
    {
      삭제==true? <tr>
      <td>1</td>
      <td>Mark</td>
      <td>dndkd</td>
      <td><button onClick={()=>{
        따봉변경(따봉+1)
      }}>+</button>
      <button onClick={()=>{
        따봉변경(따봉-1)
      }}>-</button></td>
      <td>{따봉}
        </td>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="checkbox"></input></td>
      <td><button onClick={()=>{
          삭제변경(!삭제)
      }}>X</button></td>
    </tr>
    :
    null
    }
   {
      삭제1==true?
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><button onClick={()=>{
        따봉변경1(따봉1+1)
        
      }}>+</button>
      <button onClick={()=>{
        따봉변경1(따봉1-1)
      }}>-</button></td>
      <td>{따봉1}</td>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="checkbox"></input></td>
      <td><button onClick={()=>{
        삭제변경1(!삭제1)
      }}>X</button></td>
    </tr>
    :
    null
    }
    
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td><input type="checkbox"></input></td>
      <td>히히</td>
    </tr>
    

    
  </tbody>
</Table>

   </Box>
 
  )
  }


export default Cart