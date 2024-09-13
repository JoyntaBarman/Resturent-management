import { useState } from 'react'
import Main from '../layout/Main'
import './App.css'


function App() {
  const query = new URLSearchParams(window.location.search);
  console.log('locSer: ', window.location.search);
  console.log(query)
  const [message, setMessage] = useState('');

  return (
    <>
    <Main></Main>
    </>
  )
}

export default App
