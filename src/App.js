// frontend/src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import EventList from './components/EventList';
import EventDetailsPage from './components/EventDetailsPage';
import './components/Register.css'; // Try importing here
import './components/Login.css';   // Try importing here
import './components/EventList.css'; // Try importing here
import './components/EventDetailsPage.css'; // Try importing here

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:eventId" element={<EventDetailsPage />} />
          <Route path="/" element={<div>Welcome! <Link to="/events">View Events</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;