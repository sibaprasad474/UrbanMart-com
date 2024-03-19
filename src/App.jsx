import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './pages/shop/shop'
import Cart from './pages/cart/cart'
import { ShopContext, ShopContextProvider } from './Context/ShopContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
