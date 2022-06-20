import React from "react"
import { Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import CompanyPage from "./components/CompanyPage"
import './styles/index.css'
function App(){
    return(
       <div className="parent-container">
         <Header />
         <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<CompanyPage />}/>
         </Routes>
       </div>
    )
}
export default App