import React,{Suspense,useRef} from "react";
import Nextyear from "./2022.js";



const Year = () => {
    const ref = useRef()
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
return(
    <>
    <Suspense fallback={null}>
      <group ref={ref}>
    <Nextyear  size={isMobile ? 5 : 8}    emissiveIntensity={1}>
        202
      </Nextyear>
     
      <Nextyear size={isMobile ? 5 : 8}    emissiveIntensity={0.5}>
        5
      </Nextyear>
    
      
      </group>
    </Suspense>
    </>
)
}

export default Year
