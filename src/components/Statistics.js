import React from 'react';
import '../components/Statistic.css'
const Statistics = ({ totalSales, soldItems, unsoldItems, selectedMonth }) => {
    return (
        <div className="statistics-container">
            <h2 className="statistics-heading">
                Statistics
            </h2>
            <div className="statistics-item">
                <span className="label">Total Sales:</span>
                <span className="value">Rs.{totalSales}</span>
            </div>
            <div className="statistics-item">
                <span className="label">Sold Items:</span>
                <span className="value">{soldItems}</span>
            </div>
            <div className="statistics-item">
                <span className="label">Unsold Items:</span>
                <span className="value">{unsoldItems}</span>
            </div>
        </div>
    );
};

export default Statistics;
