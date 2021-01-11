import React from "react";
import Button from "../button/button";

import './slotBook.css';

const SlotBookCard = (props) => {
    const { data } = props;
    return (
        <div className="slotBookContainer">
            <div className="slotTitle">
                <span className="slotTitle1">{data.title}</span>
                { data.period ? <span className="period">{data.period}</span> : null }
            </div>
            <div className="subTitle">{data.subtitle}</div>
                {data.star ?
                    (
                        <div className="rating">
                            <img className="star" src="/star.svg" alt="star1" />
                            <img className="star" src="/star.svg" alt="star2" />
                            <img className="star" src="/star.svg" alt="star3" />
                            <img className="star" src="/star.svg" alt="star4" />
                            <img className="star" src="/plainStar.svg" alt="star" />
                            <span className="attendees">{data.attendees}</span>
                        </div>
                    ) :
                    (
                        <React.Fragment>
                            <span className="rating">{data.newCourse}</span>
                            <span className="arrow1"><img src="/arrow1.svg" alt="arrow1" /></span>
                        </React.Fragment>
                    )     
                }
            
            <div className="bookContainer">
                <div className="bookSlot">
                    <Button buttonName="Book a Slot Now" />
                </div>
                <div className="amt">
                    <span>{data.amt}</span>
                </div>
            </div>
        </div>
    )
}
export default SlotBookCard;