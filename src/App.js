// src/App.jsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import CourseCatalog from "./Pages/Course_catalog/Catalog"; // Assume you have another page
import Loader from "./components/Loader/Loader";
import Error from "./Pages/NotFound/Error"

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Kechikishni kerakli holatda sozlang

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course_catalog"element={<CourseCatalog />} />
        <Route path="/*"  element={<Error />} />
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
