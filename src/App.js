// src/App.jsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import CourseCatalog from "./Pages/Course_catalog/Catalog"; // Assume you have another page
import Loader from "./components/Loader/Loader";
import Error from "./Pages/NotFound/Error";
import AdminDashboard from "./Pages/AdminDashboard/Admin";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Kechikishni kerakli holatda sozlang

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
