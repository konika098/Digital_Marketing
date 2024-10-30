import { Link } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <Link
                        className="page-link"
                        to="#"
                        onClick={() => onPageChange(currentPage - 1)}
                        aria-label="Previous"
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <Link className="page-link" to="#" onClick={() => onPageChange(number)}>
                            {number}
                        </Link>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <Link
                        className="page-link"
                        to="#"
                        onClick={() => onPageChange(currentPage + 1)}
                        aria-label="Next"
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
