import React from 'react';
import '../components/SearchBar.css'
const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="serachBar-container">

        <input className='searchBar'
            type="text"
            placeholder="Search transactions"
            value={searchTerm}
            onChange={onSearchChange}
        />
        </div>
    );
};

const MonthSelector = ({ selectedMonth, onMonthChange }) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
       <div className="month-selector-container">
        <select value={selectedMonth} onChange={onMonthChange} className="month-selector">
            {months.map((month, index) => (
                <option key={index} value={index + 1}>
                    {month}
                </option>
            ))}
        </select>
    </div>
    );
};

export default SearchBar ;
