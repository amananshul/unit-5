import React, { useState, useEffect } from "react";

const useStopwatch = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [milisec, setMilisec] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let id: any = null;
    if (timer) {
      id = setInterval(() => {
        if (milisec < 100) {
          setMilisec((prevMs) => prevMs + 1);
        }
        if (milisec === 99) {
          setMilisec(0);
          if (sec < 59) {
            setSec((prevSec) => prevSec + 1);
          } else {
            setMin((prevMin) => prevMin + 1);
            setSec(0);
          }
        }
      }, 10);
    } else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [timer, sec, milisec]);

  const onStart = () => {
    setTimer(true);
  };

  const onStop = () => {
    setTimer(false);
  };

  const onReset = () => {
    setMin(0);
    setSec(0);
    setMilisec(0);
    setTimer(false);
  };
  return {timer, milisec, min, sec, onReset, onStart, onStop };
};

export default useStopwatch;