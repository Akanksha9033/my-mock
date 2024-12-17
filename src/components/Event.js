import React from 'react';
import './Event.css'; // Custom styles

const EventPage = () => {
    return (
        <div className="event-page">
            {/* Header Section */}
            <header className="event-header">
                <h1>Event Name</h1>
                <p>Date: <strong>January 15, 2025</strong></p>
                <p>Time: <strong>10:00 AM - 4:00 PM</strong></p>
                <p>Location: <strong>123 Main Street, City</strong></p>
            </header>

            {/* Event Details */}
            <section className="event-details">
                <h2>About the Event</h2>
                <p>
                    Join us for an exciting day of learning and networking! This event will feature industry leaders discussing the latest trends and innovations.
                </p>
                <h3>Agenda</h3>
                <ul>
                    <li>10:00 AM - Welcome Speech</li>
                    <li>11:00 AM - Keynote Speaker</li>
                    <li>1:00 PM - Panel Discussion</li>
                    <li>3:00 PM - Networking Session</li>
                </ul>
            </section>

            {/* Media Section */}
            <section className="event-media">
                <h2>Event Highlights</h2>
                <img src="event-image.jpg" alt="Event" />
            </section>

            {/* RSVP Section */}
            <section className="event-rsvp">
                <h2>Register for the Event</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <button type="submit">Register</button>
                </form>
            </section>

            {/* Location Map */}
            <section className="event-location">
                <h2>Event Location</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18..."
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    title="Event Location"
                ></iframe>
            </section>

            {/* Contact Info */}
            <footer className="event-footer">
                <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
            </footer>
        </div>
    );
};

export default EventPage;
