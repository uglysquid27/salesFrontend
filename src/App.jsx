import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Login from './login/login.jsx'
import Side from './layout/sidebar.jsx'
import Nav from './layout/navbar.jsx'
import { getPakets } from '../service/apiService';

function App() {
  const [count, setCount] = useState(0)

  const [pakets, setPakets] = useState(null);

  useEffect(() => {
    const fetchPakets = async () => {
      try {
        const data = await getPakets();
        setPakets(data);
      } catch (error) {
        console.error('Error fetching pakets:', error);
      }
    };

    fetchPakets();
  }, []);

  return (
    <>
   <div className=''>
   <BrowserRouter>
   <Nav />
   <Side />
    <Login />
    
      {/* <Nav />
      <div className='hidden lg:block'>
      <Side />
      <RightSide />
      </div>
      
      <div className='lg:px-36'>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer /> */}
    </BrowserRouter>
</div>
    
  </>
  )
}

export default App
