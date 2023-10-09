import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
