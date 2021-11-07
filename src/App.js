import './App.css'
import Students from './components/Students'
import { useState, useEffect } from 'react'

function App() {
  const [api, setApi] = useState([])

  useEffect(() => {
    fetch('https://hp-api.herokuapp.com/api/characters/students')
    .then((response) => response.json())
    .then((response) => setApi(response))
  }, [])
      
  return (
    <div className="App">
        <Students api={api}/>
    </div>
  );
}

export default App