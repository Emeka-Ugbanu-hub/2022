import React,{useEffect,useState} from "react";

function Firework() {
  const [counter, setCounter] = useState(3);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
      if(counter > 1) {
return (
    <>
    <div style={{width:`${100}%`,height:`${100}%`,background:"#000",position:`absolute`,top:0}}>
      <img src={"/firework.gif"} className="firework"/>
    <h1 style={{color:"#fff",textAlign:"center"}}>EMEKA UGBANU WELCOMES YOU TO</h1>
    </div>
    </>
)
}
else {
  return null
}
}

export default Firework