import React from "react";
import "./user.css";
import Container from "../../components/Container/Container";

const User = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <div className="wrap">
        <p>Please login to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="UserDashboard">
      <Container>
        <div className="user-info">
          <h1>Welcome, {currentUser.name}</h1>
          <img
            src={URL.createObjectURL(currentUser.profilePicture)}
            alt="Profile"
            className="dashboard-profile-pic"
          />
          <p>Email: {currentUser.email}</p>
          <h2>Purchased Courses</h2>
          {currentUser.purchasedCourses &&
          currentUser.purchasedCourses.length > 0 ? (
            <ul>
              {currentUser.purchasedCourses.map((course, index) => (
                <li key={index}>{course.title}</li>
              ))}
            </ul>
          ) : (
            <p>You have not purchased any courses yet.</p>
          )}
        </div>
        <div className="notifications">
          <h2>Notifications</h2>
          <p>There are no notifications at this time.</p>
        </div>
      </Container>
    </div>
  );
};

export default User;
