import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Address',
      content: 'Arjundhara-06, Chhata Chowk\nJhapa, Nepal'
    },
    {
      title: 'Phone',
      content: '9852690711 / 9814905409\n9806051135 / 9806027120',
      isPhone: true
    },
    {
      title: 'Email',
      content: 'bpss2057@gmail.com'
    },
    {
      title: 'Office Hours',
      content: 'Sunday - Friday\n9:00 AM - 5:00 PM'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="card">
              <h3>{info.title}</h3>
              {info.isPhone ? (
                <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                  {info.content.split('\n').map((line, lineIndex) => (
                    <div key={lineIndex}>
                      {line.split(' / ').map((number, numIndex) => (
                        <span key={numIndex}>
                          <a href={`tel:${number.trim()}`} style={{ color: 'var(--accent-navy)', textDecoration: 'none', fontWeight: '500' }}>
                            {number.trim()}
                          </a>
                          {numIndex < line.split(' / ').length - 1 && ' / '}
                        </span>
                      ))}
                      {lineIndex < info.content.split('\n').length - 1 && <br />}
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="map-container" style={{ marginTop: '3rem' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.5766476389867!2d87.99654397543084!3d26.662034076797536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bbcfe65682df%3A0x5bcd2dd2c6b9d23c!2sBrilliant%20Pupils'%20Secondary%20School!5e0!3m2!1sen!2snp!4v1769655034424!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brilliant Pupils' Secondary School Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;