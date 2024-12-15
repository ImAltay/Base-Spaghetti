import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import CountButton from './components/Counter/CountButton.tsx'


function App() {

  return (
    <>
    <Header />
      <div className='content'>
      <h1>React App Demo</h1>
       <CountButton />
      </div>
      <Footer />
    </>
  )
}

export default App
