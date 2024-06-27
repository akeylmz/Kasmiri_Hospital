import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/items/')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>API</h1>
      <ul>
        {Object.keys(data).map(key => (
          <li key={key}>{data[key]}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
