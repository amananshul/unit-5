import React, { useState, useEffect } from "react";

const useTimer = () => {
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(0);
  const [input, setInput] = useState(false);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let id: any = null;
    if (timer) {
      id = setInterval(() => {
        if (sec > 0) {
          setSec((prevSec) => prevSec - 1);
        }
        if (sec === 0) {
          if (min === 0) {
            clearInterval(id);
          } else {
            setMin((prevMin) => prevMin - 1);
            setSec(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [timer, sec, min]);

  const onStart = () => {
    setTimer(true);
    setInput(false);
  };
  const onStop = () => {
    setTimer(false);
  };
  const onReset = () => {
    setMin(5);
    setSec(0);
    setTimer(false);
  };

  return { min, sec, input, timer, onReset, onStart, onStop };
};

export default useTimer;