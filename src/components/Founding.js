import React from 'react';

const Founding = () => {
  const foundingMembers = [
    { name: 'Mr. Kailash Pokhrel', image: '/images/Mr.Kailash Pokhrel.jpeg' },
    { name: 'Mr. Tara Prasad Nepal', image: '/images/Mr.Tara Prasad Nepal.jpeg' },
    { name: 'Mr. Ramesh Kumar Nepal', image: '/images/Mr.Ramesh Kumar Nepal.jpeg' },
    { name: 'Mr. Kishor Kumar Poudyal', image: '/images/Mr.Kishor Kumar Poudyal.jpeg' },
    { name: 'Mrs. Kalpana Nepal', image: '/images/Mrs.Kalpana Nepal.jpeg' },
    { name: 'Mr. Prakash Thapa', image: '/images/Mr.Prakash Thapa.jpeg' },
    { name: 'Mr. Mahesh Bhattarai', image: '/images/Mr.Mahesh Bhattarai.jpeg' }
  ];

  return (
    <section id="founding" className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Founding Members</h2>
        <div className="grid">
          {foundingMembers.map((member, index) => (
            <div key={index} className="card">
              <div className="member-photo">
                {member.image ? (
                  <img src={member.image} alt={member.name} style={member.name === 'Mr. Prakash Thapa' ? { objectPosition: 'center 30%' } : member.name === 'Mrs. Kalpana Nepal' ? { objectPosition: 'center 20%' } : member.name === 'Mr. Ramesh Kumar Nepal' ? { objectPosition: 'center 25%', transform: 'scale(1.1)' } : member.name === 'Mr. Tara Prasad Nepal' ? { transform: 'scale(0.95)' } : {}} />
                ) : (
                  <span>BEF</span>
                )}
              </div>
              <h4>{member.name}</h4>
              <p><strong>Founding Member</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founding;