import React,{Suspense,lazy} from "react"
import './App.css';
import Loading from "./components/loading";

const Home = lazy(() => {
  return Promise.all([
        import("./Pages/Home"),
        new Promise(resolve => setTimeout(resolve, 10000))
     ])

     .then(([moduleExports]) => moduleExports);
});
const Firework = lazy(() => {
  return Promise.all([
        import("./Effects/firework"),
        new Promise(resolve => setTimeout(resolve, 10000))
     ])

     .then(([moduleExports]) => moduleExports);
});
function App() {
  
  
  return (
    <>
    <Suspense fallback={<Loading/>}>
   <Home/>
   <Firework/> 
    </Suspense>
    </>
  );
}

export default App;
