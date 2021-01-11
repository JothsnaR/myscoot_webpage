import React from 'react';
import WidgetBlock from '../widgetBlock/widgetBlock';

import './Widget.css';

const widgetData = [
    {
        image: '/impressions.svg',
        count: '20K+',
        title: 'Impressions'
    },
    {
        image: '/visitors.svg',
        count: '5K+',
        title: 'Visitors'
    },
    {
        image: '/bookings.svg',
        count: '700+',
        title: 'Bookings'
    }
]

const Widget = () => {
    return (
        <div className="widget">
            {widgetData.map(item => (
                <WidgetBlock data={item} />
            ))}
        </div>
    )
}

export default Widget;