// import React from "react";

const Pagination = ({ allPages, postPerPage, currentPage, setCurrentPage }) => {

    const pages = [];
    for (let i = 1; i <= Math.ceil(allPages / postPerPage); i++) {
        pages.push(i);
    }

    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div className="space-x-3">
            <button
                className="px-3 py-1 text-white rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
                onClick={handlePrev}
            >
                Previous
            </button>
            <button
                className="px-3 py-1 text-white rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;