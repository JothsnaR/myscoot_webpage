import React from 'react';

import './portfolioCard.css';

const PortfolioCard = (props) => {
    const { data } = props;
    return (
        <div className="portfolioCard">
            <div className="portfolioImgContainer">
                <img src={data.image} alt="portfolio" />
            </div>
            <div className="metaData">
                {data.metaData}
            </div>
        </div>
    )
}

export default PortfolioCard;