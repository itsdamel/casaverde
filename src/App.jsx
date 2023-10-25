import Menu from './components/Menu'
import Hero from './components/Hero'
import HowTo from './components/HowTo'
import Offers from './components/Offers'
import { HomePage } from './HomePage.style'
import './App.css'

function App() {
 
  return (
    <HomePage>
      <Menu />
      <Hero />
      <HowTo />
      <Offers />
    </HomePage>
  )
}

export default App
