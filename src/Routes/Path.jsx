import react from "react"
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom"
import Home from "../pages/Home/Home"
const Path=()=>{
  return(
    <>
     <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
     </Router>
    </>
  )  
}

export default Path