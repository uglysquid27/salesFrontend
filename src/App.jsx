import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Login from '../pages/login/login.jsx'
import Dashboard from '../pages/dashboard/dashboard.jsx'
import Paket from '../pages/paket/index.jsx'
import Main from '../pages/layout/main.jsx'
import ProtectedRoute from "../helper/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0)

  const [pakets, setPakets] = useState(null);

  return (
    <>
   <div className=''>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
    
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route
              path=""
              element={
                <Main>
                  <Dashboard />
                </Main>
              }
            />

          </Route>
          <Route path="/paket" element={<ProtectedRoute />}>
            <Route
              path=""
              element={
                <Main>
                  <Paket />
                </Main>
              }
            />

          </Route>
        </Routes>
      </BrowserRouter>
</div>
    
  </>
  )
}

export default App
