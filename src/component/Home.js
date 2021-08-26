import React, { useEffect, useState } from 'react';
import Event from './Event';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://pure-sea-11849.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    return (
        <div className="container">
            <div className="row">
                {
                    events.map(event => <Event event={event}></Event>)
                }
            </div>
        </div>
    );
};

export default Home;