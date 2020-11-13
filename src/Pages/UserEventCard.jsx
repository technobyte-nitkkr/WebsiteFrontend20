import React from 'react';
import './UserEventCard.css';
const UserEventCard = ({ props }) => {
    return (
        <div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="" alt="Avatar" style={{
                            width:
                                '300px', height: '300px'
                        }} />
                    </div>
                    <div className="flip-card-back">
                        <h1>Excal</h1>
                        <p>Timings: 10:30</p>
                        <p>Have Fun</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export { UserEventCard };