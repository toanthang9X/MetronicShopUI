import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PreFooter from './components/PreFooter/PreFooter';
import Blog from './pages/Blog';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/detail/:productId' element={<Detail />} />
      </Routes>
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
