import './App.scss'
import iPhone from './images/iPhone-frame.png'
import Header from './components/Header'
import Calculator from './components/Calculator'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <img src={iPhone} alt="iPhone frame" />
      <div className="calc-container-outer">
        <Header />
        <Calculator />
        <Footer />
      </div>
    </div>
  )
}

export default App
