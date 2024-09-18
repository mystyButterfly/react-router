import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Settings() {
  return (
  <div>
  <h3>Settings</h3>
  <Link to={'profile'}>Profile</Link>
  <Link to={'security'}>Security</Link>
  <Outlet/></div>);
}