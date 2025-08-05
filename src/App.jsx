import './App.css'
import Headers from './components/Headers'

import HomepageComponent from './components/Hompage'
import Footer from './components/Footer'
import {Routes, Route } from "react-router";
import Login from './components/Login'


function App() {


  return (
    <>
    <Headers />
    <Routes>
      <Route path="/" element={<HomepageComponent />} />
      <Route path='/login' element={<Login />} />
    </Routes>

    
    <Footer />
    </>
  )
}

export default App
