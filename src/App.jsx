import './App.css'
import Footer from './components/footer'
import About from './components/about'
import Navbar from './components/navbar'
import Repair from './components/repair'
import Work from './components/work'
import Home from './components/home'
function App() {


  return (
    <main className='App'>
      <Navbar />
      {/* TODO */}
      <Home />
      <About />
      <Repair />
      <Work />
      <Footer />
    </main>
  )
}

export default App
