import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Detail from './routes/detail.js';
import Cart from  './routes/cart.js';

function App() {
  return (
    <div>
     메인
    <Routes>
      <Route path="/detail0" element={<Detail/> } />
      <Route path="/cart" element={ <Cart/> } />
    </Routes>
    </div>
  );
}

export default App;
