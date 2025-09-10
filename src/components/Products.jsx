import React from 'react';

const PRODUCTS = [
  { title: 'HMI for Electric Vehicles', desc: 'Standalone HMI for Wireless Power Transfer- Customizable & High-Performance' },
  { title: 'In-house Software Stacks', desc: 'Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit nec.' },
  { title: 'Smart HIL', desc: 'Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit nec.' },
];

export default function Products() {
  return (
    <section id="products">
      <h2>Our Products</h2>
      <div className="card-container">
        {PRODUCTS.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
