import React, { useState } from "react";
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";
import styles from "../Styles/Main.module.css";

const GoogleMain = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <button
            className={show ? styles.active : ""}
            onClick={() => setShow(true)}
          >
            Timer
          </button>
          <button
            className={!show ? styles.active : ""}
            onClick={() => setShow(false)}
          >
            Stopwatch
          </button>
        </div>
        <div className={styles.main}>{show ? <Timer /> : <Stopwatch />}</div>
      </div>
    </>
  );
};

export default GoogleMain;