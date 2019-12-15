import React from 'react';
import { Link } from 'gatsby';

const Home = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/app/dashboard">Dashboard</Link>
  </>
);

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <Home path="/app/dashboard/" />
  </div>
);

export default Dashboard;
