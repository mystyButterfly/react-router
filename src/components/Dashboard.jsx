import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Example Navbar component

function Dashboard() {
  return (
    <div>
     
      <h2>Dashboard</h2>
      <Navbar />
      <Outlet /> 
    </div>
  );
}
export default Dashboard;


