import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from '../src/components/Pre';
import Home from './pages/Home';
import About from './pages/About';
import Life from './pages/Life';
import Interests from './pages/Interests';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [load, updateLoad] = useState(true);



  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? 'no-scroll' : 'scroll'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/life" element={<Life />} />
            <Route path="/interests" element={<Interests />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;