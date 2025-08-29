import Home from './Components/Home'
import NavBar from './Components/NavBar.js'
// import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Components/About'
import Contact from './Components/Contact';
import Products from './Components/Products.js';
import ScrollToTop from './Components/ScrollToTop.js'
import ProductDetail from './Components/ProductDetail.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <div>

      <BrowserRouter>
        <ScrollToTop></ScrollToTop>

        <NavBar></NavBar>
        <Routes>

          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/product-detail" element={<ProductDetail></ProductDetail>} />
          
          <Route path="/contact" element={<Contact></Contact>} /> 

          {/* <Route path="/service" element={<Services></Services>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/project" element={<Project></Project>} />
          <Route path="/safety" element={<Safety></Safety>} />
          <Route path="/contact" element={<Contact></Contact>} /> */}


        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>

  );
}

export default App;
