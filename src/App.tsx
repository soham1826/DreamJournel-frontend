import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'
import Verify from './components/Verify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/verify" element={<Verify/>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}

export default App
