import './App.css'
import Footer from './components/footer'
import Home from './components/home'
import Navbar from './components/navbar'
import Repair from './components/repair'
import Work from './components/work'

function App() {


  return (
    <main className='App'>
      <Navbar />
      {/* TODO */}
      <Home />
      <Repair />
      <Work />
      <Footer />
    </main>
  )
}

export default App
