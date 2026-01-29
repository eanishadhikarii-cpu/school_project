import React from 'react';

const Classes = () => {
  const academicPrograms = [
    { 
      name: 'Computer Science', 
      description: 'Advanced computing skills and programming fundamentals for the digital age.',
      level: 'Grade XI & XII'
    },
    { 
      name: 'Hotel Management', 
      description: 'Comprehensive hospitality training with practical kitchen experience.',
      level: 'Grade XI & XII'
    },
    { 
      name: 'Business Studies', 
      description: 'Essential business knowledge and entrepreneurial skills development.',
      level: 'Grade XI & XII'
    },
    { 
      name: 'General Education', 
      description: 'Complete foundational education from PG to Grade 10 with holistic development.',
      level: 'PG - Grade X'
    }
  ];

  const facilities = [
    'Advanced computer lab',
    'Well-stocked library',
    'Theatre and presentation hall',
    'Hotel Management practical kitchen',
    'Project presentation rooms',
    'Brilliant kinder world',
    'Hygienic canteen',
    'Transportation service',
    'Pure drinking water supply',
    'Generator and power back up',
    'Green saplings plantation',
    'Achievement and trophy display'
  ];

  const learningApproach = [
    'Experienced and qualified teachers',
    'Practical and skill-based education',
    'Continuous assessment system',
    'Holistic personality development'
  ];

  return (
    <section id="classes" className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Academic Programs</h2>
        <p className="section-subtitle">Complete Education from PG to Grade 10 & +2 Streams</p>
        <div className="grid">
          {academicPrograms.map((program, index) => (
            <div key={index} className="card academic-card">
              <div className="program-badge">{program.level}</div>
              <h3>{program.name}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
        
        <div className="facilities-section">
          <h2 style={{ textAlign: 'center' }}>School Facilities</h2>
          <p className="section-subtitle">World-Class Infrastructure for Excellence</p>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-item">
                <div className="luxury-facility-icon"></div>
                <p>{facility}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="learning-section">
          <h2 style={{ textAlign: 'center' }}>Faculty & Learning Approach</h2>
          <p className="section-subtitle">Expert Guidance for Comprehensive Development</p>
          <div className="learning-grid">
            {learningApproach.map((approach, index) => (
              <div key={index} className="learning-item">
                <div className="luxury-star-icon"></div>
                <p>{approach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;