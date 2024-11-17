import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Spaghetti</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <Footer />
    </>
  )
}

export default App
