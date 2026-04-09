import React from 'react'

import './App.css'
import Shop from "./components/ShopList/Shop.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";



function App() {

  return (
    <div className="container">
      <Header />
      <Shop />
      <Footer />
    </div>
  )
}

export default App
