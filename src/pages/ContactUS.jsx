import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
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

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const phoneValue = phone;
    const message = form.current.message.value;
    const mailto = `mailto:info@testbasesolutions.co.uk?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(phoneValue)}%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="form-section" data-aos="fade-right">
          <h2>Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-info-message" style={{ marginBottom: '1rem', background: '#f5f5f5', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
              <p>
                Contact us at <a href="mailto:info@testbasesolutions.co.uk">info@testbasesolutions.co.uk</a> or fill out the contact form to get in touch with us.
              </p>
            </div>
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
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="z-0">
            <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="OpenStreetMap">
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Satellite">
                <TileLayer
                  attribution='&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Terrain">
                <TileLayer
                  attribution='&copy; OpenTopoMap (CC-BY-SA)'
                  url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
            </LayersControl>
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
