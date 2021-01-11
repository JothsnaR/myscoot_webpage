import React from 'react';

import './testimonialCard.css';

const TestimonialCard = (props) => {
    const { data } = props;
    return (
        <div className="testimonialCardContainer">
            <img className="testimonialImg" src="/testimonial_pic1.svg" alt="testimonial" />
            <div className="testimonialSubContainer">
                <div className="testimonialCardTitle">
                    <h6>{data.testimonialCardTitle}</h6>
                </div>
                <div className="profileSection">
                    <div className="testimonialprofileImg">
                        <img className="profile" src="/profile.svg" alt="profile" />
                    </div>
                    <div className="profileDetails">
                        <span className="profileName" >{data.name}</span>
                        <span className="profileRating">{data.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;