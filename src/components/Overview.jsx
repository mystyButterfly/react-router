import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Overview() {
  return (
    <div>
      <h3>Overview</h3>
      <h3>All products:</h3>
      <Link to={"1"}>Product 1</Link>
      <Link to={"2"}>Product 2</Link>
      <Link to={"3"}>Product 3</Link>
      <div
        style={{
          border: "2px solid red",
          width: "200px",
          height: "50px",
          marginInline: "auto",
          display:"grid",
          placeItems:"center",
          marginTop: "10px"
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
