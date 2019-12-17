import React from 'react';
import { Link } from '@reach/router';

const Home = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/app/dashboard">Dashboard</Link>
    <Link to="/app/dasboard/settings">Settings</Link>
    <Link to="/app/account">Account</Link>
  </nav>
);

const Settings = () => (
  <>
    <h3>Settings</h3>
    <Home />
  </>
);

export default Settings;
