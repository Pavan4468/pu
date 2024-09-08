// src/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import collegeImg from './assets/sir.png';
import collegeImg1 from './assets/teacher 2.jpg';
import collegeImg2 from './assets/teacher 3.jpg';
import collegeImg3 from './assets/teacher 4.jpg';
import collegeImg4 from './assets/teacher 5.jpg';
import collegeImg5 from './assets/teacher 6.jpg';
import collegeImg6 from './assets/teacher 7.jpg';
import collegeImg7 from './assets/teacher 8.jpg';
import time from './assets/time.png';

const sampleTeachers = [
  { id: 1, name: 'Blessed Price P', subject: 'MAD,JAVA', cabin: 'LB04', availability: 'Mon:10-12,Tue:11:12, Wed:10-12,Thr:9to 10,Fri:3 to 4 ', img: collegeImg, timetable: time},
  { id: 2, name: 'Jane Smith', subject: 'Science', cabin: 'LB05', availability: 'Mon:10-12,Tue:11:12, Wed:10-12,Thr:9to 10,Fri:3 to 4 ', img: collegeImg1, timetable: time },
  { id: 3, name: 'Emily Johnson', subject: 'English', cabin: 'LB06', availability: 'Mon:10-12,Tue:11:12, Wed:10-12,Thr:9to 10,Fri:3 to 4 ', img: collegeImg2, timetable: time },
  { id: 4, name: 'Emily Johnson', subject: 'English', cabin: 'LB06', availability: 'Mon:10-12,Tue:11:12, Wed:10-12,Thr:9to 10,Fri:3 to 4 ', img: collegeImg3, timetable: time },
  { id: 5, name: 'Emily Johnson', subject: 'English', cabin: 'LB06', availability: 'Mon:10-12,Tue:11:12, Wed:10-12,Thr:9to 10,Fri:3 to 4 ', img: collegeImg4, timetable: time },
  { id: 6, name: 'Emily Johnson', subject: 'English', cabin: 'LB06', availability: 'Mon:10-12,Tue:11:12, Wed:10-12,Thr:9to 10,Fri:3 to 4 ', img: collegeImg5, timetable: time },
  { id: 7, name: 'Emily Johnson', subject: 'English', cabin: 'LB06', availability: 'Mon:10-12,Tue:11:12, Wed:10-12,Thr:9to 10,Fri:3 to 4 ', img: collegeImg6, timetable: time },
  { id: 8, name: 'Emily Johnson', subject: 'English', cabin: 'LB06', availability: 'Mon:10-12,Tue:11:12, Wed:10-12,Thr:9to 10,Fri:3 to 4 ', img: collegeImg7, timetable: time },
 

];

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [teachers, setTeachers] = useState(sampleTeachers);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredTeachers = sampleTeachers.filter(teacher =>
      teacher.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setTeachers(filteredTeachers);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h1> Teachers Cabin</h1>
          <h3>If you need help, we're here for you!</h3>
          <Link to="/support" className="support-link">Career Support</Link> {/* Update link */}
        </div>
      </header>
      <section className="search-section">
        <input
          type="text"
          placeholder="Search for a teacher..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </section>
      <section className="teachers-list">
        {teachers.length > 0 ? (
          teachers.map(teacher => (
            <div key={teacher.id} className="teacher-card">
              <h3>
                <Link to="/TeacherDetails" state={{ teacher }} className="teacher-link">
                  {teacher.name}
                </Link>
              </h3>
              <p>Subject: {teacher.subject}</p>
              <p>Cabin: {teacher.cabin}</p>
            </div>
          ))
        ) : (
          <p className="no-teachers">No teachers found.</p>
        )}
      </section>
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} This is place u can find all teachers cabins and time they are Free.</p>
      </footer>
    </div>
  );
}

export default Home;
