import React from 'react';
import BrowseCard from '../browseCard/browseCard';
import InfiniteScroll from "react-infinite-scroll-component";

import './browseSection.css';

const browseData = [
    {
        label: '1-1 Appointment',
        image: '/browse_pic1.svg',
        card: {
            title: 'Private Yoga Class',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: true,
            attendees: '4/5 | 200+ Attendees',
            amt: '₹300'
        }
    },
    {
        label: 'Monthly Class',
        image: '/browse_pic2.svg',
        card: {
            period: 'Dec 5',
            title: 'Bachata Class Without Partner',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: false,
            newCourse: 'New Course',
            amt: '₹2800'
        }
    },
    {
        label: 'Monthly Class',
        image: '/browse_pic1.svg',
        card: {
            period: 'Dec 5',
            title: 'Salsa Class Without Partner',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: true,
            attendees: '4/5 | 200+ Attendees',
            amt: '₹2800'
        }
    },
    {
        label: '1-1 Appointment',
        image: '/browse_pic1.svg',
        card: {
            title: 'Private Yoga Class',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: true,
            attendees: '4/5 | 200+ Attendees',
            amt: '₹300'
        }
    },
    {
        label: 'Monthly Class',
        image: '/browse_pic2.svg',
        card: {
            period: 'Dec 5',
            title: 'Bachata Class Without Partner',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: false,
            newCourse: 'New Course',
            amt: '₹2800'
        }
    },
    {
        label: 'Monthly Class',
        image: '/browse_pic1.svg',
        card: {
            period: 'Dec 5',
            title: 'Salsa Class Without Partner',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: true,
            attendees: '4/5 | 200+ Attendees',
            amt: '₹2800'
        }
    },
    {
        label: '1-1 Appointment',
        image: '/browse_pic1.svg',
        card: {
            title: 'Private Yoga Class',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: true,
            attendees: '4/5 | 200+ Attendees',
            amt: '₹300'
        }
    },
    {
        label: 'Monthly Class',
        image: '/browse_pic2.svg',
        card: {
            period: 'Dec 5',
            title: 'Bachata Class Without Partner',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: false,
            newCourse: 'New Course',
            amt: '₹2800'
        }
    },
    {
        label: 'Monthly Class',
        image: '/browse_pic1.svg',
        card: {
            period: 'Dec 5',
            title: 'Salsa Class Without Partner',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: true,
            attendees: '4/5 | 200+ Attendees',
            amt: '₹2800'
        }
    },
    {
        label: '1-1 Appointment',
        image: '/browse_pic1.svg',
        card: {
            title: 'Private Yoga Class',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: true,
            attendees: '4/5 | 200+ Attendees',
            amt: '₹300'
        }
    },
    {
        label: 'Monthly Class',
        image: '/browse_pic2.svg',
        card: {
            period: 'Dec 5',
            title: 'Bachata Class Without Partner',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: false,
            newCourse: 'New Course',
            amt: '₹2800'
        }
    },
    {
        label: 'Monthly Class',
        image: '/browse_pic1.svg',
        card: {
            period: 'Dec 5',
            title: 'Salsa Class Without Partner',
            subtitle: 'Multiple Slots | 1 session/week | 1 Hr Duration',
            star: true,
            attendees: '4/5 | 200+ Attendees',
            amt: '₹2800'
        }
    }
]

class BrowseSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: browseData.slice(0,6),
            threshold: 6,
            hasMore: true
        };
        this.dataLength = 0;
    }

    handleLoadData = () => {
        if (this.dataLength < browseData.length) {
            const formData = browseData.slice(this.dataLength, this.dataLength + this.state.threshold)
            setTimeout(() => {
                this.setState({
                    data: this.state.data.concat(formData)
                })
            }, 500)
        } else if (this.dataLength === browseData.length) {
            this.setState({
                hasMore: false
            })
        }
    }
    render() {
        this.dataLength = this.state.data.length;
        console.log(this.state.data, this.dataLength, browseData.length)
        return (
            <div className="browseSectionContainer">
                <div className="browseSectionTitle">
                    <span className="browseTitle">Browse All Classes</span>
                    <span><img className="arrow" src="/arrow.svg" alt="arrow" /></span>
                </div>
                <div className="cardSection">      
                    <InfiniteScroll
                        dataLength={this.state.data.length}
                        next={this.handleLoadData}
                        hasMore={this.state.hasMore}
                        loader={<div class="loader" style={{ textAlign: "center" }} ></div>}
                    >
                        <section className="cards">
                            {this.state.data.map((item, index) => (
                                <BrowseCard data={item} index={index} />
                            ))}
                        </section>
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default BrowseSection;