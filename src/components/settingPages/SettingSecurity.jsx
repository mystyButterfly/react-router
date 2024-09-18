import React from "react";

function SettingSecurity() {
  function fetchData(callback) {
    setTimeout(() => {
      callback("Callback: Data received");
    }, 2000);
  }

  fetchData((data) => {
    alert(data);
  });
  return <h2>SettingSecurity component</h2>;
}

export default SettingSecurity;
