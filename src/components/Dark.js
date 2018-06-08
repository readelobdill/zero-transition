import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default () => (
  <Link to="/light">
    <div className="card light">
      <img className="bounce-image" src={require('../images/zero-card-black.png')}/>
    </div>
  </Link>
);