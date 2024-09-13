import { useContext, useState } from 'react'
import Main from '../layout/Main'
import './App.css'
import { CartContext } from './provider/AuthContext';


function App() {
  const query = new URLSearchParams(window.location.search);
  console.log('locSer: ', window.location.search);
  const {cart} = useContext(CartContext);
  if(query.get("success")){
    alert('Compleate your payment.')
  }
  if(query.get('canceled')){
    alert("Something is happening please pay again.")
  }

  return (
    <>
    <Main></Main>
    </>
  )
}

export default App
