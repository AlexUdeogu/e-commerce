import MobNavbar from "./components/MobNavbar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Category from "./components/Category"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast"
import Banner from "./components/Banner"
import Feature from "./components/Feature"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main>
      <Navbar />
      <MobNavbar />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakfast />
      <Banner/>
      <Feature/>
      <Footer />
    </main>
  )
}

export default App
