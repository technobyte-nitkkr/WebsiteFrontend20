import React from 'react';
import './UserEventCard.css';
const UserEventCard = ({ props }) => {
    return (
        <div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.0-9/s960x960/70812730_1422663834556220_4817469918897242112_o.jpg?_nc_cat=105&ccb=2&_nc_sid=110474&_nc_ohc=c-lXPHi_zuQAX8mvzH4&_nc_ht=scontent.fluh1-1.fna&tp=7&oh=012aa16e2edc005b55bbd18515f264b3&oe=5FD2541F" alt="Avatar" style={{
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