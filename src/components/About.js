import React from 'react';

const About = () => {
  const aboutItems = [
    {
      title: 'Our Mission',
      content: 'To provide quality education that empowers students to become responsible, creative, and critical thinkers who contribute positively to society.'
    },
    {
      title: 'Our Vision',
      content: 'To be a leading educational institution that nurtures academic excellence, character development, and lifelong learning.'
    },
    {
      title: 'Academic Excellence',
      content: 'Our rigorous curriculum and dedicated teachers ensure students achieve their full potential in all subjects.'
    },
    {
      title: 'Character Development',
      content: 'We focus on building strong moral values and leadership skills that prepare students for life.'
    }
  ];

  const whyChooseItems = [
    'Professionalized teaching and learning',
    'Digitalized smart classrooms',
    'Highly qualified faculty',
    'Life-skills based projects and assignments',
    'Learner-centric training, seminars, and presentations',
    'Academic excellence and career opportunities',
    'Peaceful and disciplined learning environment',
    'Educational tours and excursions',
    'Guest lectures and special classes',
    'Scholarship schemes and student facilities',
    'ECAs and CCAs',
    'Sports, games, and cultural activities',
    'Noticeable student transformation toward excellence'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>About Our School</h2>
        <div className="grid">
          {aboutItems.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        
        <div className="why-choose-section">
          <h2 style={{ textAlign: 'center' }}>Why Choose BPSS ?</h2>
          <p className="section-subtitle">Excellence in Education, Character, and Innovation</p>
          <div className="why-choose-grid">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="why-choose-item">
                <div className="luxury-check-icon"></div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;