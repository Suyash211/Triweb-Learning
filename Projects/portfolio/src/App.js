import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navbar from './components/navbar';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import particles from './utils.js/particles';

function App() {

  const location = useLocation();

  const handleInit = async(main) => {
    await loadFull(main);
  }

  const renderParticleJs = location.pathname === '/';

  return (
    <div className="App">
      {renderParticleJs && (
        <Particles id="particles" options={particles} init={handleInit}/>
      )}
      <Navbar />

      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
