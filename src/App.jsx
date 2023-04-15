import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
// import Product from './components/Product'
import Contact from './components/Contact'
import Cart from './components/Cart'
// import SingleProduct from './components/SingleProduct'
import ErrorPage from './components/ErrorPage'
import Nav_bar from './components/Nav_bar'
import './assets/js/main.js'
import Clothes from './components/Clothes';
import ClothesSingleProduct from './components/ClothesSingleProduct';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
         <Nav_bar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/product' element={<Product />} /> */}
          <Route path='/Contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/product/:id' element={<SingleProduct />} /> */}
          <Route path='/clothes/:id' element={<ClothesSingleProduct />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
