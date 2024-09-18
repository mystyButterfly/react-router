import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/postssdssd"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty array means this effect will run once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data Axios</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>ID: {item.id} Title: {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
