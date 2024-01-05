import { useState } from 'react'
import AboutUs from './Pages/Stay';
import HomePage from './Pages/Home';
import Contactus from './Pages/Contactus';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stay" element={<AboutUs />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}

export default App
