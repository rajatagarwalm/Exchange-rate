import React, { useEffect, useState } from 'react';
import './Header.css'

const Header = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const interval = setInterval(() => {
            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const date = now.toLocaleDateString();
            setCurrentTime(`${time}`);
            setCurrentDate(`${date}`);
            setLoading(false);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="Header">
            <header>
                <nav>
                    <hr />
                    <h1>Exchange Rates</h1>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <div className="current-time">Time: {currentTime}</div>
                            <div className="current-time">Date: {currentDate}</div>
                        </>
                    )}
                    <hr />
                </nav>
            </header>
        </div>
    );
};

export default Header;
