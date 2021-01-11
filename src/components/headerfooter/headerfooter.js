import React from 'react';
import './headerfooter.css';

const HeaderFooter = (props) => {
    return (
        <div className="headerContainer">
            <div className={`leftContainer ${ props.data.type === "footer" ? 'footerLeftContainer' : ''}`}>
                <span>
                    {props.data.name} {props.data.type === "footer" ? <b>{props.data.titlename}</b> : null}
                </span>
            </div>
            <div className={`rightContainer ${ props.data.type === "footer" ? 'footerRightContainer' : ''}`}>
                <span>
                    {props.data.title}
                </span>
            </div>
        </div>
    )
}

export default HeaderFooter;