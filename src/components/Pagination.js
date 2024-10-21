import React from 'react';
import '../components/Pagination.css'
const Pagination = ({ currentPage, totalPages, onNext, onPrevious, perPage, setPerPage }) => {
    return (
        <div className="pagination-container">
        <div className="page-info">
            <span>Page No: {currentPage}</span>
        </div>
        <div className="pagination-buttons">
            <button onClick={onPrevious} disabled={currentPage === 1}>Previous</button>
            <button onClick={onNext} disabled={currentPage === totalPages}>Next</button>
        </div>
        <div className="per-page-selector">
            <span>Per Page: 10</span>
        </div>
        </div>
    );
};

export default Pagination;
