import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Product from './pages/Product';
import { Spin } from 'antd';


import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="example">
    <Spin size="small" spinning='true'/>
  </div>
      <Header />
      <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        {/* <Route path='/blog' element={<Blog />}/> */}
        <Route path='/detail/:productId' element={<Detail />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="*" element={<Cart />} /> */}
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
