import React, { useState } from "react";
import "./admin.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";

const AdminDashboard = ({ courses, users, addCourse, removeCourse }) => {
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    level: "Beginner",
    category: "Programming",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({
      ...newCourse,
      [name]: value,
    });
  };

  const handleAddCourse = () => {
    addCourse(newCourse);
    setNewCourse({
      title: "",
      description: "",
      level: "Beginner",
      category: "Programming",
      price: "",
    });
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="AdminDashboard">
          <h1>Admin Dashboard</h1>

          <section className="section">
            <h2>Manage Courses</h2>
            <div className="add-course2">
              <input
                type="text"
                name="title"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                placeholder="Course Description"
                value={newCourse.description}
                onChange={handleChange}
              />
              <select
                name="category"
                value={newCourse.category}
                onChange={handleChange}
              >
                <option value="Programming">Programming</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                {/* Add more categories as needed */}
              </select>
              <input
                type="number"
                name="price"
                placeholder="Course Price"
                value={newCourse.price}
                onChange={handleChange}
              />
              <button onClick={handleAddCourse}>Add Course</button>
            </div>
            <div className="course-list2">
              {courses &&
                courses.map((course) => (
                  <div key={course.id} className="course2">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <p>Category: {course.category}</p>
                    <p>Price: ${course.price}</p>
                    <button onClick={() => removeCourse(course.id)}>
                      Remove
                    </button>
                  </div>
                ))}
            </div>
          </section>

          <section className="section">
            <h2>Manage Users</h2>
            <div className="user-list">
              {users &&
                users.map((user) => (
                  <div key={user.id} className="user2">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>Role: {user.role}</p>
                    {/* Add more user management functionality as needed */}
                  </div>
                ))}
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AdminDashboard;
