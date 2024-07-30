
import React from 'react';
import './Citizens.css';

const tdStyle = {
  borderBottom: '1px solid #ddd',
  padding: '20px 10px',
  whiteSpace: 'pre-line',
};

const buttonStyle = {
  backgroundColor: '#fdf2e9',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  borderRadius: '4px',
};

const Citizen = ({ citizen, index, toggleStatus }) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{citizen.name}</td>
        <td>{citizen.age}</td>
        <td>{citizen.address}</td>
        <td>{citizen.status}</td>
        <td>
          <button className="button" onClick={() => toggleStatus(index)}>Toggle Status</button>
        </td>
      </tr>
    );
  };
  
  export default Citizen;