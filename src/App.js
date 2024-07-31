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
import Info_page_1 from "./Pages/course_info_pages/Info_page_1.jsx";
import Info_page_2 from "./Pages/course_info_pages/info_page_2.jsx";
import Info_page_3 from "./Pages/course_info_pages/Info_page_3.jsx";
import Info_page_4 from "./Pages/course_info_pages/Info_page_4.jsx";
import Info_page_5 from "./Pages/course_info_pages/info_page_5.jsx";
import Info_page_6 from "./Pages/course_info_pages/Info_page_6.jsx";
import Info_page_7 from "./Pages/course_info_pages/Info_page_7.jsx";
import Info_page_8 from "./Pages/course_info_pages/Info_page_8.jsx";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

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
        <Route path="/about" element={<Error />} />
        <Route path="/course_info_1" element={<Info_page_1 />} />
        <Route path="/course_info_2" element={<Info_page_2 />} />
        <Route path="/course_info_3" element={<Info_page_3 />} />
        <Route path="/course_info_4" element={<Info_page_4 />} />
        <Route path="/course_info_5" element={<Info_page_5 />} />
        <Route path="/course_info_6" element={<Info_page_6 />} />
        <Route path="/course_info_7" element={<Info_page_7 />} />
        <Route path="/course_info_8" element={<Info_page_8 />} />
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
