import React,{useState,useEffect} from "react";


const Loading = () => {
    const [counter, setCounter] = useState(10);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
  return (
      <>
     <div className="loadbox">
     <span style={{color:"#fff",fontSize:`${100}px`,fontFamily:"Segoe UI"}}>{counter}</span>
     </div>
      </>
  )
}

export default Loading;