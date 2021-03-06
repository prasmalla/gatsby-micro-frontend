import React from 'react';
import { Link } from 'gatsby';

const Index = () => (
  <>
    <h1>Boilerplate Micro-Frontend</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/app/dashboard">Dashboard</Link>
      <Link to="/app/account">Account</Link>
    </nav>
  </>
);

export default Index;
