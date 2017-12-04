import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>reviewing react</h1>
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/dashboard">Dashboard</Link>
    &nbsp;
    <Link to="/reduxtest">ReduxTest</Link>
  </header>
);

export default Header;