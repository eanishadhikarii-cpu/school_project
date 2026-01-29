import React from 'react';

const Gallery = () => {
  const galleryItems = [
    { 
      title: 'Campus Photos', 
      description: 'Beautiful school campus and facilities' 
    },
    { 
      title: 'Events', 
      description: 'School events and celebrations' 
    },
    { 
      title: 'Activities', 
      description: 'Student activities and achievements' 
    },
    { 
      title: 'Academic Excellence', 
      description: 'Awards, achievements and academic milestones' 
    }
  ];

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>School Gallery</h2>
        <div className="grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;