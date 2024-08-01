import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Catalog from "./Pages/Course_catalog/Catalog"
import Error from "./Pages/NotFound/Error"
import Contact from "./Pages/Contact/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course_catalog" element={<Catalog/>}/>
        <Route path="/*" element={<Error />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
