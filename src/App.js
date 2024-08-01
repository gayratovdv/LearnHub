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
import Info_page from "./Pages/Info_page/info_page";
import Course from "./components/Course/Course";
import About from "./Pages/About/About"
import User from "./Pages/UserDashboard/User.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

import english from "./Assets/english course image.jpg";
import frontEnd from "./Assets/fron_end.jpg";
import backEnd from "./Assets/back_end.png";
import motion from "./Assets/pro motion course image.jpg";
import threeD from "./Assets/3D_design.webp";
import UIUX from "./Assets/UIUX_design.webp";
import tester from "./Assets/tester_course.jpg";
import chess from "./Assets/chess_course.jpg";


const App = () => {
  const globalCourses = [
    {
      id: 1,
      image: english,
      title: 'Ingliz tili kursi',
      subtitle: "Bu kursda siz o'zingizning ingliz tilingizni darajasini pre-A1ga tushirasiz.",
      price: 0,
      category: "other",
      priceClass: "price",
      discountClass: "discount",
      sertificate: false,
      discount: undefined,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 2,
      image: frontEnd,
      title: 'Front-end kursi',
      subtitle: "Bu kursda siz dasturlashning Front-end qismini asoslariga o'rganasiz.",
      price: 600,
      category: "programming",
      priceClass: "price",
      discountClass: "discount",
      discount: undefined,
      sertificate: true,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 3,
      image: backEnd,
      title: 'Back-end kursi',
      subtitle: "Bu kursda siz dasturlashning Back-end qismini asoslariga o'rganasiz.",
      price: 0,
      category: "programming",
      priceClass: "price",
      discountClass: "discount",
      discount: undefined,
      sertificate: true,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 4,
      image: motion,
      title: 'Motion dizayn kursi',
      subtitle: "Bu kursda siz motion dizaynning asoslariga o'rganmisiz.",
      price: 500,
      category: "design",
      priceClass: "price",
      discountClass: "discount",
      discount: undefined,
      sertificate: true,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 5,
      image: threeD,
      title: '3D dizayn kursi',
      subtitle: "Bu kursda siz blenderda kubni o'chirishga o'rganasiz.",
      price: 0,
      category: "design",
      priceClass: "price",
      discountClass: "discount",
      discount: undefined,
      sertificate: false,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 6,
      image: UIUX,
      title: "UIUX dizayn kursi",
      subtitle: "Bu kursda siz saytlarning dizaynini qilishga o'rganasiz.",
      price: 300,
      category: "design",
      priceClass: "price",
      discountClass: "discount",
      discount: undefined,
      sertificate: true,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 7,
      image: tester,
      title: "Tester kursi",
      subtitle: "Bu kursda siz saytlarda xatolarni tpishga o'rganasiz.",
      price: 0,
      category: "other",
      priceClass: "price",
      discountClass: "discount",
      discount: undefined,
      sertificate: false,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 8,
      image: chess,
      title: "Shaxmat kursi",
      subtitle: "Bu kursda siz shaxmat yosh razrad 2ga ko'tarasiz.",
      price: 100,
      category: "other",
      priceClass: "price",
      discountClass: "discount",
      discount: undefined,
      sertificate: false,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
  ];

  let discount = 5

  for (let i = 0; i < globalCourses.length; i++) {
    if (globalCourses[i].price >= 300) {
      globalCourses[i].priceClass = globalCourses[i].priceClass + " price-discounted"
      globalCourses[i].discountClass = "discounted"
      globalCourses[i].discount = globalCourses[i].price - globalCourses[i].price / (100 / discount)
    }
  }

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
        <Route path="/" element={<Home courses={globalCourses} />} />
        <Route path="/course_catalog" element={<CourseCatalog courses={globalCourses} discount={discount} />} />
        <Route path="/*" element={<Error />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/admin"
          element={
            <AdminDashboard
              courses={courses}
              users={users}
              addCourse={addCourse}
              removeCourse={removeCourse}
            />
          }
        />
        <Route path="/info_page" element={<Info_page />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
