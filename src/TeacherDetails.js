import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TeacherDetails.css';

function TeacherDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { teacher } = location.state || {}; // Destructure the teacher from state

  if (!teacher) {
    return <p>Teacher details not found.</p>;
  }

  const { name, subject, cabin, availability, img, timetable } = teacher;

  return (
    <div className="details-container">
      <div className="profile-section">
        <img src={img} alt={name} className="teacher-image" />
        <h2 className="teacher-name">{name}</h2>
        <h3 className="teacher-subject">Subject: {subject}</h3>
        <h3 className="teacher-cabin">Cabin Number: {cabin}</h3>
        <h3 className="teacher-availability">Availability: {availability}</h3>
      </div>
      <div className="timetable-section">
        <h2 className='timetable'>Timetable</h2>
        <img src={timetable} alt="Teacher Timetable" className="timetable-image" />
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default TeacherDetails;
