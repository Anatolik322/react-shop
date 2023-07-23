
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer';
import ProductList from './components/productList';
import Slider from './components/slider';



function App() {

  return (
    <div className="App">
      <Header/>
      <Slider></Slider>
      <ProductList/>
      <Footer/>
    </div>
    
  );
}

export default App;
