import "./Features.css";

const features = [
  { title: "Modern Technology", desc: "State-of-the-art dental equipment" },
  { title: "Painless Procedures", desc: "Comfort-focused treatments" },
  { title: "Hygiene First", desc: "Sterilized environment guarantee" },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-number">{index + 1}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
