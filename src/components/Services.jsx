import React from 'react';

const SERVICES = [
  { title: 'System Engineering', desc: 'End-to-end system design and integration' },
  { title: 'Software Engineering', desc: 'ASPICE-compliant development lifecycle' },
  { title: 'Hardware Engineering', desc: 'Custom hardware solutions for automotive applications' },
  { title: 'HIL Bench Commissioning', desc: 'Complete hardware-in-the-loop system setup' },
  { title: 'Automotive Standards', desc: 'ISO 26262, ASPICE, and ISO 21434 compliance' },
];

export default function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="card-container">
        {SERVICES.map((s) => (
          <article className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
