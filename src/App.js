<<<<<<< HEAD
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
=======
// src/App.jsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import CourseCatalog from "./Pages/Course_catalog/Catalog";
import Loader from "./components/Loader/Loader";
import Error from "./Pages/NotFound/Error";
import AdminDashboard from "./Pages/AdminDashboard/Admin";
import Info_page from "./Pages/Info_page/info_page.jsx";
import Course from "./Pages/Course-page/Course.jsx";
import About from "./Pages/About/About"

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
>>>>>>> ef848faa5dbc21172ae877b47ff748c61ab82560

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Kechikishni kerakli holatda sozlang

    return () => clearTimeout(timer);
  }, [location]);

  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);

  const addCourse = (newCourse) => {
    setCourses([...courses, { ...newCourse, id: Date.now() }]);
  };

  const removeCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  return (
    <div>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course_catalog" element={<CourseCatalog />} />
        <Route path="/*" element={<Error />} />
        <Route
          path="/admin"
          element={
            <AdminDashboard courses={courses}users={users}addCourse={addCourse}removeCourse={removeCourse}/>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/info_page" element={<Info_page />}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/about" element={<About/>} />

      </Routes>
    </div>
  );
};


const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
