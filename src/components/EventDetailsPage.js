import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './EventDetailsPage.css'; // Changed import

function EventDetailsPage() {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/events/${eventId}`)
      .then(response => {
        setEventDetails(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching event details.');
        setLoading(false);
        console.error("Error fetching event:", err);
      });
  }, [eventId]);

  if (loading) {
    return <div>Loading event details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!eventDetails) {
    return <div>Event not found.</div>;
  }

  return (
    <div className={styles.eventDetailsContainer}> {/* Added className */}
      <div className={styles.eventDetailsWrapper}> {/* Added className */}
        <h1>{eventDetails.title}</h1>
        <div className={styles.eventInfo}> {/* Added className */}
          <p className={styles.infoItem}><strong>Date:</strong> {new Date(eventDetails.date).toLocaleDateString()}</p> {/* Added className */}
          <p className={styles.infoItem}><strong>Time:</strong> {eventDetails.time}</p> {/* Added className */}
          <p className={styles.infoItem}><strong>Location:</strong> {eventDetails.location}</p> {/* Added className */}
          <p className={styles.infoItem}><strong>Organizer:</strong> {eventDetails.organizer}</p> {/* Added className */}
          <p className={styles.infoItem}><strong>Price:</strong> ${eventDetails.ticketPrice}</p> {/* Added className */}
          <p className={styles.infoItem}><strong>Category:</strong> {eventDetails.category}</p> {/* Added className */}
        </div>
        <div className={styles.description}> {/* Added className */}
          <p>{eventDetails.description}</p>
        </div>
        {/* Add more details here based on your design */}
      </div>
    </div>
  );
}

export default EventDetailsPage;