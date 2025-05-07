import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EventDetailsPage.css'; // Direct import

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
    <div className="event-details-container">
      <div className="event-details-wrapper">
        <h1>{eventDetails.title}</h1>
        <div className="event-info">
          <p className="info-item"><strong>Date:</strong> {new Date(eventDetails.date).toLocaleDateString()}</p>
          <p className="info-item"><strong>Time:</strong> {eventDetails.time}</p>
          <p className="info-item"><strong>Location:</strong> {eventDetails.location}</p>
          <p className="info-item"><strong>Organizer:</strong> {eventDetails.organizer}</p>
          <p className="info-item"><strong>Price:</strong> ${eventDetails.ticketPrice}</p>
          <p className="info-item"><strong>Category:</strong> {eventDetails.category}</p>
        </div>
        <div className="description">
          <p>{eventDetails.description}</p>
        </div>
        {/* Add more details here based on your design */}
      </div>
    </div>
  );
}

export default EventDetailsPage;