import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [birthYear, setBirthYear] = useState('')
  const [age, setAge] = useState(null)

  const calculateAge = () => {
    if (birthYear) {
      const currentYear = new Date().getFullYear()
      const calculatedAge = currentYear - parseInt(birthYear)
      setAge(calculatedAge)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateAge()
    }
  }

  return (
    <div className="app">
      <img src={reactLogo} className="logo" alt="React logo" />
      <h1>Age Predictor</h1>
      <div className="predictor">
        <input
          type="number"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your birth year"
          className="input"
        />
        <button onClick={calculateAge} className="btn">
          Calculate Age
        </button>
        {age !== null && (
          <div className="result">
            <p>You are <span className="age-number">{age}</span> years old</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
