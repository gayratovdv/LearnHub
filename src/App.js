import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Catalog from "./Pages/Course_catalog/Catalog"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course_catalog" element={<Catalog/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
