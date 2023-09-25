import React from 'react';
//import localImage from '../../images/kiran2.jpg'; // Import the image

import './Banner.css';


function Banner() {
    return (
    <div className="banner">
    <img src={process.env.PUBLIC_URL + '/kiran2.jpg'} alt="Local Image" />
    <p>Fresh 2022 look</p>
    </div>
  );
};

export default Banner;
