import React,{Suspense,useRef} from "react";
import Nextyear from "./2022.js";



const Year = () => {
    const ref = useRef()
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
return(
    <>
    <Suspense fallback={null}>
      <group ref={ref}>
      <Nextyear
          size={isMobile ? 5 : 8}     
    >
          2022
        </Nextyear>
      
      </group>
    </Suspense>
    </>
)
}

export default Year