import React from 'react';

const Four = () => {
  const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
  //  {items.map((item, index) => {
  //  return <li key={index}>{item}</li>
  // })}
  
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Four;
