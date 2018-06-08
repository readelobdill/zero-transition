import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default () => (
  <Link to="/">
    <div className="card dark">
      <img className="bounce-image" src={require('../images/zero-card-grey.png')}/>
    </div>
  </Link>
);