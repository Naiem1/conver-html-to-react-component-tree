import React from 'react';

const ContactIcon = ({ icons }) => {
  const { icon, address } = icons;
  return (
    <div className="col-sm-4">
      <div className="map_icon">
        <img
          src={icon}
          alt="img"
          style={
            {
              maxWidth: '100%',
              paddingLeft: '30px'
            }
          }
        />
        <p className="email-text">
          <a href="#address">{ address}</a>
        </p>
      </div>
    </div>
  );
};

export default ContactIcon;