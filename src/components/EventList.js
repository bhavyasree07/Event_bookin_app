import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './EventList.css'; // Changed import

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
    <div className={styles.eventListContainer}> {/* Added className */}
      <h2>Upcoming Events</h2>
      <ul className={styles.eventList}> {/* Added className */}
        {events.map(event => (
          <li key={event._id} className={styles.eventItem}> {/* Added className */}
            <h3>
              <Link to={`/events/${event._id}`} className={styles.eventTitleLink}> {/* Added className */}
                {event.title}
              </Link>
            </h3>
            <p className={styles.eventDate}>Date: {new Date(event.date).toLocaleDateString()}</p> {/* Added className */}
            <p className={styles.eventLocation}>Location: {event.location}</p> {/* Added className */}
            <p className={styles.eventCategory}>Category: {event.category}</p> {/* Added className */}
            <Link to={`/events/${event._id}`} className={styles.viewDetailsButton}> {/* Added className */}
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;