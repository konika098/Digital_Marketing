import { Link } from "react-router-dom";

const Pagination = () => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <Link className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                </li>
                <li className="page-item"><Link className="page-link active" href="#">1</Link></li>
                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                <li className="page-item">
                    <Link className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
