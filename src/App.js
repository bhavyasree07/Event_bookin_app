// frontend/src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import EventList from './components/EventList';
import EventDetailsPage from './components/EventDetailsPage';
import './components/Register.css'; 
import './components/Login.css';   
import './components/EventList.css'; 
import './components/EventDetailsPage.css'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:eventId" element={<EventDetailsPage />} />
          <Route path="/" element={<div className="welcome-container">Welcome! <Link to="/events">View Events</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;