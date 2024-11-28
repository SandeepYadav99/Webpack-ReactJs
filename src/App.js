import React from 'react'
import styles from "./App.module.css";
import img from "./coding-event.jpg";
const App = () => {
  return (
    <>
    <h1 className={styles.text}><center>Web-pack</center></h1>
    <img src={img} alt="" />
    </>
  )
}

export default App