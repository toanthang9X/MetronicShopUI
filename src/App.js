import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/product' element={<Product />}/>
        <Route exact path='/detail/:productId' element={<Detail />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
