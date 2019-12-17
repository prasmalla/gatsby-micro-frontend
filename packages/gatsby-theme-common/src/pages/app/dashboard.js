import React from 'react';
import { Link, Router } from '@reach/router';
import Settings from '../../components/settings';

const Home = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/app/dashboard">Dashboard</Link>
    <Link to="/app/dasboard/settings">Settings</Link>
  </nav>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
    <Router>
      <Settings path="/app/dashboard/settings" />
      <Home path="/app/dashboard/" />
    </Router>
  </>
);

export default Dashboard;
