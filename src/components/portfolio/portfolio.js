import React from 'react';
import PortfolioCard from '../portfolioCard/portfolioCard';
import Carousel from "react-elastic-carousel";

import './portfolio.css';

const portfolioHeadingData = ['All', 'Images', 'Videos', 'Blog', 'Podcast'];

const portfolioData = [
    {
        image: '/portfolio.svg',
        metaData: 'Quick Chakra Meditation Balancing - By Neelakshi'
    },
    {
        image: '/portfolio.svg',
        metaData: 'Quick Chakra Meditation Balancing - By Neelakshi'
    },
    {
        image: '/portfolio.svg',
        metaData: 'Quick Chakra Meditation Balancing - By Neelakshi'
    },
    {
        image: '/portfolio.svg',
        metaData: 'Quick Chakra Meditation Balancing - By Neelakshi'
    }
]

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 3 }
  ];

const Portfolio = () => {
    return (
        <div className="portfolioContainer">
            <div className="portfolioTitle">Check My Portfolio</div>
            <div className="portfolioHeading">
                {portfolioHeadingData.map((item, index) => (
                    <>
                        <span className={`item ${index === 0 ? 'item1' : ''}`}>{item}</span>
                        {index === 2 ? <span className="lineBreak"></span> : ''}
                    </>
                ))}
            </div>
            <div className="portfolio">
                <Carousel breakPoints={breakPoints}>
                    {portfolioData.map(item => (
                        <PortfolioCard data={item} />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Portfolio;