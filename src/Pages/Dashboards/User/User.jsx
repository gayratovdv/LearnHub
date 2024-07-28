import React from 'react';
import './user.css';

const UserDashboard = ({ currentUser }) => {
  if (!currentUser) {
    return <p>Please login to view your dashboard.</p>;
  }

  const isFile = currentUser.profilePicture instanceof File || currentUser.profilePicture instanceof Blob;

  return (
    <div className="UserDashboard">
      <h1>Welcome, {currentUser.name}</h1>
      {isFile ? (
        <img
          src={URL.createObjectURL(currentUser.profilePicture)}
          alt="Profile"
          className="dashboard-profile-pic"
        />
      ) : (
        <p>No profile picture available.</p>
      )}
      <p>Email: {currentUser.email}</p>
      <h2>Purchased Courses</h2>
      {currentUser.purchasedCourses && currentUser.purchasedCourses.length > 0 ? (
        <ul>
          {currentUser.purchasedCourses.map((course, index) => (
            <li key={index}>{course.title}</li>
          ))}
        </ul>
      ) : (
        <p>You have not purchased any courses yet.</p>
      )}
    </div>
  );
};

export default UserDashboard;
