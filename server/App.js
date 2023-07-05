import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("/api/getData");
    setData(response.data);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.some_column}</div>
      ))}
    </div>
  );
}

export default App;