import React from 'react';
import TestimonialCard from "../testimonialCard/testimonialCard";
import Carousel from "react-elastic-carousel";

import './testimonials.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 3 }
  ];

const testimonialData = [
    {
        testimonialCardTitle: "Benefitted from Tarot Reading and Meditations",
        name: "Rohit",
        rating: "4/5 - Rating"
    },
    {
        testimonialCardTitle: "Benefitted in mind with Reiki and Access Bars",
        name: "Yashas",
        rating: "4/5 - Rating"
    },
    {
        testimonialCardTitle: "Benefitted in mind with Reiki and Access Bars",
        name: "Yashas",
        rating: "4/5 - Rating"
    },
    {
        testimonialCardTitle: "Benefitted from Tarot Reading and Meditations",
        name: "Rohit",
        rating: "4/5 - Rating"
    },
    {
        testimonialCardTitle: "Benefitted in mind with Reiki and Access Bars",
        name: "Yashas",
        rating: "4/5 - Rating"
    },
    {
        testimonialCardTitle: "Benefitted in mind with Reiki and Access Bars",
        name: "Yashas",
        rating: "4/5 - Rating"
    }
]

const Testimonials = () => {
    return (
        <div className="testimonialContainer">
            <div className="testimonialTitle">Testimonials</div>
            <div className="testimonialIcon">
            </div>
            <div className="testimonial">
                <Carousel breakPoints={breakPoints}>
                    {testimonialData.map(item => (
                        <TestimonialCard data={item} />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials;