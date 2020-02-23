/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const range = (from, to, step = 1) => {
    const ranges = [];
    let i = from;
    while (i <= to) {
        ranges.push(i);
        i += step;
    }
    return ranges;
};

const LEFT_PAGE = 'left_page';
const RIGHT_PAGE = 'right_page';

const Pagination = React.memo(props => {
    const { initialPage, totalItems, itemsPerPage, handlePageChange, pageNeighbours = 1 } = props;
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [pageRange, setPageRange] = useState([]);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    // (1) < {4 5} [6] {7 8} > (10)
    const totalNumbers = pageNeighbours * 2 + 3; // () + {} * 2 + ()
    const totalBlocks = totalNumbers + 2;

    const changePageRange = direction => {
        setCurrentPage(direction === RIGHT_PAGE ? currentPage + 1 : currentPage - 1);
    };

    const fetchPageNumbers = () => {
        if (totalPages > totalBlocks) {
            let pages = [];
            const leftBound = currentPage - pageNeighbours;
            const rightBound = currentPage + pageNeighbours;
            const beforeLastPage = totalPages - 1;
            const startPage = leftBound > 2 ? leftBound : 2;
            const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

            pages = range(startPage, endPage);

            const pagesCount = pages.length;
            const singleSpillOffset = totalNumbers - pagesCount - 1;

            const leftSpill = startPage > 2;
            const rightSpill = endPage < beforeLastPage;

            const leftSpillPage = LEFT_PAGE;
            const rightSpillPage = RIGHT_PAGE;

            if (leftSpill && !rightSpill) {
                const extraPages = range(startPage - singleSpillOffset, startPage - 1);
                pages = [leftSpillPage, ...extraPages, ...pages];
            } else if (!leftSpill && rightSpill) {
                const extraPages = range(endPage + 1, endPage + singleSpillOffset);
                pages = [...pages, ...extraPages, rightSpillPage];
            } else if (leftSpill && rightSpill) {
                pages = [leftSpillPage, ...pages, rightSpillPage];
            }
            return [1, ...pages, totalPages];
        }
        return range(1, totalPages);
    };

    useEffect(() => {
        setPageRange(fetchPageNumbers());
        handlePageChange(currentPage);
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);

    useEffect(() => {
        setPageRange(fetchPageNumbers());
    }, []);

    return (
        <div className="pagination">
            <button className="paginationNav" onClick={() => changePageRange(LEFT_PAGE)} disabled={currentPage === 1}>
                {'<'}
            </button>

            <div className="pagination">
                {pageRange.map((page, index) => {
                    if (page === LEFT_PAGE) {
                        return (
                            <span key={index} className="pX-10">
                                ....
                            </span>
                        );
                    }
                    if (page === RIGHT_PAGE) {
                        return (
                            <span key={index} className="pX-10">
                                ....
                            </span>
                        );
                    }
                    return (
                        <div key={index} className={`paginationNumber ${currentPage === page ? 'paginationNumber--active' : ''}`} onClick={() => setCurrentPage(page)}>
                            {page}
                        </div>
                    );
                })}
            </div>

            <button className="paginationNav" onClick={() => changePageRange(RIGHT_PAGE)} disabled={currentPage === totalPages}>
                {'<'}
            </button>
        </div>
    );
});

Pagination.propTypes = {
    initialPage: PropTypes.number,
    totalItems: PropTypes.number,
    itemsPerPage: PropTypes.number,
    handlePageChange: PropTypes.func,
    pageNeighbours: PropTypes.number,
};

export default Pagination;
