import React, { useEffect, useState } from 'react';

const Six = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json()) // Call .json() as a function
      .then((data) => {
        console.log(data);
        setData(data[0]); // Assuming you want to display the first user in the data array
      })
      .catch((error) => console.error('Error fetching data:', error)); // Add error handling
  }, []); // Empty dependency array to run only once

  return (
    <div>
      {data ? (
        <div>
          <h1>Id : {data.id}</h1>
          <h1>Login : {data.login}</h1>
        </div>
      ) : (
        <p>Loading......</p>
      )}
    </div>
  );
};

export default Six;
