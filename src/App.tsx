import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
