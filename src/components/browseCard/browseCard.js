import React from 'react';
import SlotBookCard from '../slotBookCard/slotBook';

import './browseCard.css';

const BrowseCard = (props) => {
    const { data } = props;
    return (
        <div className="cardOuterContainer">
            <div className="cardContainer">
                <div className="cardImgContainer">
                    <img src={data.image} alt={data.image} />
                </div>
                <div className="cardImgContent">
                    <span className={`leftContent`}>{data.label}</span>
                    <span className="rightContent">
                        <img className="loveIcon" src="/love.svg" alt="love"  />
                        <img className="shareIcon" src="/share.svg" alt="share" />
                    </span>
                </div>
            </div>
            <div className="contentCard">
                <SlotBookCard data={data.card} />
            </div>
        </div>
    )
}

export default BrowseCard;