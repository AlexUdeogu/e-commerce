import MobNavbar from "./components/MobNavbar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Category from "./components/Category"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast"
import Banner from "./components/Banner"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import { CartContextProvider } from "./context/cartContext"
import { useState } from "react"
import Cart from "./components/Cart"

const App = () => {
  const [showCart, setShowCart] = useState(false)

  return (
  <CartContextProvider>

    <main>
      <Navbar setShowCart= {setShowCart} />
      <MobNavbar setShowCart= {setShowCart} />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakfast />
      <Banner/>
      <Feature/>
      <Footer />
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
    </main>

  </CartContextProvider>

  )
}

export default App
