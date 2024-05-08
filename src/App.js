import Timer from "./Timer/Timer.js";
import Button from "./Button/Button.js";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if(timer) {
      interval = setInterval(() => { 
        setTime((prevValue) => prevValue + 10);
        }, 10);
    } else if(!timer){
        clearInterval(interval);
    } 
    return () => clearInterval(interval);
  }, [timer]);

 
  return (
    <div>
        <Timer time={time} />
        <Button onClick={() => setTimer(true)}>Start</Button>
        <Button onClick={() => setTimer(false)}>Stop</Button>
        <Button onClick={() => setTimer(setTime(0))}>Reset</Button>
    </div>
  );
}

export default App;
