import React, { useState } from 'react';

const Sixteen = ({ items1, items1PerPage }) => {
    const [CurrentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = CurrentPage * items1PerPage;
    const indexOfFirstItem = indexOfLastItem - items1PerPage;
    const currentItems = items1.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items1.length / items1PerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            {/* Display current items */}
            <ul key="items-list">
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* Display pagination numbers */}
            <ul key="pagination" style={{ display: 'flex', listStyleType: 'none', cursor: 'pointer' }}>
                {pageNumbers.map((number) => (
                    <li 
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        style={{
                            margin: '0 5px',
                            padding: '5px',
                            border: number === CurrentPage ? '1px solid black' : '1px solid lightgray',
                            borderRadius: '3px',
                            fontWeight: number === CurrentPage ? 'bold' : 'normal'
                        }}
                    >
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sixteen;
