import React from 'react';
import Button from '../button/button';

import './mainpage.css';

class MainPage extends React.Component {
    render() {
        return (
            <div className="mainPageContainer">
                <div className="pageContainer">
                    <div className="containerData">
                        <div className="heading1">Train your mind, body & Soul</div>
                        <div className="heading2">Wellness coach | Yoga | Meditation | Healing | Dance</div>
                        <div className="buttonBlock">
                            <div className="bookButton">
                                <Button buttonName="Book a class" />
                            </div>
                            <div className="getButton">
                                <Button buttonName="Get in touch" />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
