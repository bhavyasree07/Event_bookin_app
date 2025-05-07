import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './EventList.css'; // Direct import

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/events')
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching events.');
        setLoading(false);
        console.error('Error fetching events:', error);
      });
  }, []);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="event-list-container">
      <h2>Upcoming Events</h2>
      <ul className="event-list">
        {events.map(event => (
          <li key={event._id} className="event-item">
            <h3>
              <Link to={`/events/${event._id}`} className="event-title-link">
                {event.title}
              </Link>
            </h3>
            <p className="event-date">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="event-location">Location: {event.location}</p>
            <p className="event-category">Category: {event.category}</p>
            <Link to={`/events/${event._id}`} className="view-details-button">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;