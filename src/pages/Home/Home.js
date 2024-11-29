import React from "react";
import styles from "./Styles.module.css";
import imgPic from "../../assets/coding-event.jpg";
const Home = () => {
  return (
    <>
      <h1 className={styles.text}>
        <center>Web-pack</center>
      </h1>
      <img src={imgPic} alt="..." width={200} height={200} />
    </>
  );
};

export default Home;
