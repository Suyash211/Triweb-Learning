import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Layout from "./components/layouts/Layout";
import {Routes,Route} from 'react-router-dom';
import AddProduct from "./pages/AddProduct";
import FavouriteItems from "./pages/FavouriteItems";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/add' element={<AddProduct />}></Route>
        <Route path='/product/favourite' element={<FavouriteItems />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;

