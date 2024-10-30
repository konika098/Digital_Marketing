import { Link } from "react-router-dom";

const Email = () => {
    return (
        <div className="email__section">
            <div className="container">
                <div className="email__area">
                    <h2 className="email-title">
                       {` Let’s Start Working Together.`}<br className="d-none d-md-block" />
                        <Link to="mailto:naharweb15@gmail.com" target="_blank" rel="noopener noreferrer">
                            <span className="get-in-touch">Get in Touch</span>
                        </Link> with Us!
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Email;
