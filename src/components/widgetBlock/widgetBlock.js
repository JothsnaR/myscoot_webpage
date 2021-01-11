import React from 'react';

import './widgetBlock.css';

const WidgetBlock = (props) => {
    return (
        <div className="widgetBlock">
            <div className="image"><img src={props.data.image} alt="impressions" className="widgetImg" /></div>
            <div className="count"> {props.data.count}</div>
            <div className="title">{props.data.title}</div>
        </div>
    )
}

export default WidgetBlock;