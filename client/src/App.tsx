import './App.css'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import CountButton from './components/Counter/CountButton.tsx'

function App() {

  return (
    <>
    <Header />
      <h1>React App Demo</h1>
       <CountButton />
      <Footer />
    </>
  )
}

export default App
