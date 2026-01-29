import React from 'react';

const Teachers = () => {
  const faculty = [
    { name: 'Mr. Ramesh Kumar Nepal', position: 'Vice Principal', image: '/images/Mr.Ramesh Kumar Nepal.jpeg' },
    { name: 'Mr. Kishor Kumar Poudyal', position: 'Chief Accountant', image: '/images/Mr.Kishor Kumar Poudyal.jpeg' },
    { name: 'Mrs. Pushpa Koirala', position: 'Secondary Teacher', image: null },
    { name: 'Mr. Sanjeet Bhandari', position: 'Secondary Teacher', image: null },
    { name: 'Mrs. Kalpana Nepal', position: 'Secondary Teacher', image: '/images/Mrs.Kalpana Nepal.jpeg' },
    { name: 'Mrs. Koushila Rimal', position: 'Lower Secondary Teacher', image: null }
  ];

  return (
    <section id="teachers" className="section">
      <div className="container">
        <h2>Distinguished Faculty</h2>
        <div className="grid">
          {faculty.map((teacher, index) => (
            <div key={index} className="card">
              <div className="staff-photo">
                <span>#</span>
              </div>
              <h4>{teacher.name}</h4>
              <p><strong>{teacher.position}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;