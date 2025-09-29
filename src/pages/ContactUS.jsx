import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IMaskInput } from 'react-imask';
import './ContactUS.css';

// Fix Leaflet's default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

const ContactUS = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [phone, setPhone] = useState('');
  const position = [52.428062375909974, -1.5744578783417158]; 

  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      user_phone: phone,
      message: form.current.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully! We'll respond within 24 hours.");
        form.current.reset();
        setPhone('');
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        setSuccessMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="form-section" data-aos="fade-right">
          <h2>Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="user_name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="user_email" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <IMaskInput
                mask="+44 0000 000000"
                value={phone}
                onAccept={(value) => setPhone(value)}
                placeholder="+44 ____ ______"
                inputRef={(ref) => {
                  if (ref) {
                    ref.name = 'user_phone';
                  }
                }}
                className="phone-input"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
            {successMessage && <div className="status-message">{successMessage}</div>}
          </form>
        </div>

        <div className="map-section" data-aos="fade-left">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                Test Base Solutions <br /> 3, Birmingham Rd, Coventry
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
