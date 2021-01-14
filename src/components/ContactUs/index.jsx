import React from 'react';
import data from '../../data';
import ContactIcon from '../ContactIcon';

const ContactUs = () => {
  return (
    <div className="contact_main">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="touch_text">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="contact_section_2">
        <div className="container">
          <div className="row">
            {
              data.contactIcon.map((icon, i) => (
                <ContactIcon
                  icons={icon}
                  key={i}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;