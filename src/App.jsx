import './App.css'
import Headers from './components/Headers'

import HomepageComponent from './components/Hompage'
import Footer from './components/Footer'
import {Routes, Route } from "react-router";


function App() {


  return (
    <>
    <Headers />
    <Routes>
      <Route path="/" element={<HomepageComponent />} />


    </Routes>

    
    <Footer />
    </>
  )
}

export default App
