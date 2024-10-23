import PropTypes from 'prop-types';

const SeoCard = ({ imgSrc, altText, title, description, aosProps }) => {
    return (
        <div className="seo-card" {...aosProps}>
            <div className="icon">
                <img className="img-fluid" src={imgSrc} alt={altText} />
            </div>
            <div className="content">
                <p className="fs-24-c">{title}</p>
                <p className="fs-18-s">{description}</p>
            </div>
        </div>
    );
};


SeoCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    aosProps: PropTypes.object,
};

export default SeoCard;
