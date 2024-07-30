import React, { useState, useEffect } from 'react';
import Citizen from './Citizen';
import SearchFilter from './SearchFilter';
import './Citizens.css';


const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '50px 0',
  textAlign: 'center',

};

const thStyle = {
  borderBottom: '1px solid #ddd',
  padding: '20px 10px',
  textAlign: 'center',
  backgroundColor: '#fdf2e9',
};

const tdStyle = {
  borderBottom: '1px solid #ddd',
  padding: '10px',
  whiteSpace: 'pre-line',
};

const randomAddresses = [
    'Tunghaan',
    'Argao',
    'Tulay',
    'Tungkop',
    'Tunghaan',
    'Argao',
    'Tulay',
    'Tungkop',
    'Tunghaan',
    'Argao',
  ];

const Citizens = () => {
    const initialCitizens = Array.from({ length: 10 }, (_, index) => ({
      name: ['Kai', 'Jhulie', 'Neil', 'Mark'][index % 4],
      age: Math.floor(Math.random() * 51) + 20,
      address: randomAddresses[Math.floor(Math.random() * randomAddresses.length)],
      status: index < 6 ? 'Active' : 'Inactive',
    }));
  
    const [citizens, setCitizens] = useState(initialCitizens);
    const [filteredCitizens, setFilteredCitizens] = useState(initialCitizens);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      setFilteredCitizens(
        citizens.filter((citizen) =>
          Object.values(citizen).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      );
    }, [searchQuery, citizens]);
  
    const toggleStatus = (index) => {
      setCitizens((prevCitizens) =>
        prevCitizens.map((citizen, i) =>
          i === index
            ? { ...citizen, status: citizen.status === 'Active' ? 'Inactive' : 'Active' }
            : citizen
        )
      );
    };
  
    return (
      <div>
        <h3 style={{ fontFamily: 'cursive' }}>CITIZENS LIST</h3>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCitizens.map((citizen, index) => (
              <Citizen key={index} citizen={citizen} index={index} toggleStatus={toggleStatus} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Citizens;
