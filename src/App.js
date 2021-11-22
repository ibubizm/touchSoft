import Buttons from './components/buttons'
import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)

  return (
    <div
      className="App"
      style={{ background: !(result % 2) ? 'dodgerblue' : 'gold' }}
    >
      <div className="content">
        <div className="result">{result}</div>
        <div className="result">
          {!(result % 2) ? 'четное число' : 'нечетное число'}
        </div>
        <Buttons result={result} setResult={setResult} />
      </div>
    </div>
  )
}

export default App
