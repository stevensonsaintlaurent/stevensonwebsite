function Services() {
  const services = [
    {
      icon: "💻",
      title: "Front-End Development",
      description:
        "I design and develop modern, responsive websites and web applications using React, JavaScript, HTML, CSS, and Vite. My goal is to create fast, user-friendly, and visually appealing digital experiences.",
      features: [
        "Responsive Websites",
        "React Applications",
        "UI/UX Development",
        "Landing Pages",
        "Portfolio Websites",
      ],
    },
    {
      icon: "💃",
      title: "Professional Dance Instruction",
      description:
        "As a professional dancer and instructor at Freedom Dance Studio, I teach students of all levels while helping them build confidence, technique, musicality, and social dancing skills.",
      features: [
        "Bachata Sensual",
        "Urban Kiz",
        "Konpa",
        "Private Lessons",
        "Group Classes",
      ],
    },
    {
      icon: "🎺",
      title: "Band Leadership",
      description:
        "I lead the Freedom Dance Studio Big Band, organizing rehearsals, coordinating performances, and creating unforgettable live music experiences for dancers and audiences.",
      features: [
        "Live Performances",
        "Band Coordination",
        "Event Entertainment",
        "Music Direction",
        "Stage Leadership",
      ],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-title">
          <h2>My Services</h2>
          <p>
            I combine creativity, technology, music, and dance to deliver
            engaging experiences both on stage and on the web.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
