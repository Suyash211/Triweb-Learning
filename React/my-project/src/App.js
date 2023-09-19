import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import MainMenu from "./components/layouts/MainMenu";
import Layout from "./components/layouts/Layout";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;

