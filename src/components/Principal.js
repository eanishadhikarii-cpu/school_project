import React from 'react';

const Principal = () => {
  return (
    <section id="principal" className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Message from the Principal</h2>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
          <div className="member-photo" style={{ width: '120px', height: '120px', marginBottom: '2rem' }}>
            <img src="/images/Mr.Tara Prasad Nepal.jpeg" alt="Mr. Tara Prasad Nepal" />
          </div>
          <h3>Mr. Tara Prasad Nepal</h3>
          <p style={{ fontSize: '1.125rem', fontWeight: '500', color: 'var(--luxury-navy)', marginBottom: '1.5rem' }}>
            <strong>Founder / Principal</strong>
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'left' }}>
            At Brilliant Pupils&#39; Secondary School (BPSS), we strongly believe that education is not only about acquiring academic knowledge but also about shaping character, values, and life skills. Our mission is to nurture young minds into confident, responsible, and capable individuals who are prepared to face the challenges of the modern world.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'left' }}>
            Located in Arjundhara, Jhapa, BPSS has been established with a clear vision to provide quality, practical, and learner-centered education. Through professional teaching, digitalized smart classrooms, and skill-based learning, we ensure that our students receive an education that goes beyond textbooks.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'left' }}>
            We emphasize academic excellence, discipline, creativity, and holistic personality development. Our experienced and dedicated faculty members work tirelessly to guide students, encourage critical thinking, and help them discover their true potential. Alongside academics, we actively promote life-skills, extracurricular activities, sports, seminars, presentations, and educational tours, which play a vital role in shaping a well-rounded personality.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'left' }}>
            At BPSS, we prepare students not only for examinations but also for life. We aim to instill values such as integrity, respect, and responsibility while providing a supportive and serene learning environment.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'left' }}>
            I warmly invite parents and students to join Brilliant Pupils&#39; Secondary School and become part of a learning community that believes in "Engage today, Enjoy tomorrow, Secure future."
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'left', marginBottom: '2rem' }}>
            Together, let us build a brighter future.
          </p>
          <div style={{ textAlign: 'right', fontStyle: 'italic', color: 'var(--luxury-navy)', marginTop: '2rem' }}>
            <p style={{ margin: '0.5rem 0', fontSize: '1rem', fontWeight: '600' }}>Founder / Principal</p>
            <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>Brilliant Pupils&#39; Secondary School (BPSS)</p>
            <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>Arjundhara-06 Jhapa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;