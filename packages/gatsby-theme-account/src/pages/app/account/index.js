import React from 'react';
import { Link } from 'gatsby';

const Home = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/app/dashboard">Dashboard</Link>
    <Link to="/app/account">Account</Link>
    <Link to="/app/account/profile">Profile</Link>
  </nav>
);

const Account = () => (
  <>
    <h1>Account</h1>
    <Home path="/app/account/" />
  </>
);

export default Account;
