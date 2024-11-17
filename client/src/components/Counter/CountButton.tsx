import {useState} from 'react'
import './CountButton.css'

function CountButton() {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
            <h4>Counter </h4>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    )
}

export default CountButton;