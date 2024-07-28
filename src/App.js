import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Catalog from "./Pages/Course_catalog/Catalog"
import Error from "./Pages/NotFound/Error"
import User from "./Pages/UserDashboard/User"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course_catalog" element={<Catalog/>}/>
        <Route path="/*" element={<Error />} />
        <Route path="/user-dashboard" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
