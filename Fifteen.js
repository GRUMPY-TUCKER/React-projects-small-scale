import React, { useState } from 'react';

const Fifteen = ({ items1 = [] }) => {
  const [SearchTerm, setSearchTerm] = useState('');

  const filteredItems = items1.filter((item) =>
    typeof item === 'string' && item.toLowerCase().includes(SearchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search....."
        value={SearchTerm}
        onChange={(ele) => setSearchTerm(ele.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fifteen;
