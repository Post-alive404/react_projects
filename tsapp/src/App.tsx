import { useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  axios.get('http://someapi.com')
  .then(response => console.log(response))
  .catch(error => console.log(error))

  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Hello ${name}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={handleChange}
          />
          <input type='submit' value='Submit'/>
      </form>
    </>
  )
}

export default App
