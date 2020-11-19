import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Key from "../config.keys";
import './categories.css'
const Category = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    var radius = 50;

    useEffect(() => {
        window.scrollTo(0, 0);
        // var clientWidth = document.getElementById('container1').clientWidth;
        // if (clientWidth < 500) {
        //     radius = 30;
        // }
        const getEvents = async () => {
            try {
                const res = await axios.get(`${Key.BASE_API}/events/categories`);
                setData({ ...res.data.data });
            } catch (error) {
                setError(true);
                console.log(error);
            }
        };
        getEvents();
    }, []);
    console.log(data.categories);
    var categoriesString = [];
    // for (var [index, value] of data.categories.entries()) {
    //     var str = "";
    //     // str=<div className='c-item'> 
    //     //         <div>
    //     //             <div className="circle"></div>
    //     //         </div>
    //     //         <div> {data.categories[cat]} </div>

    //     categoriesString.push(<div className='c-item'> <div><div className='circle'></div></div><div> {value} </div>);
    // }
    if (data.categories == undefined)
        data.categories = ["Astronomy", "Design", "Informals", "Managerial", "Online-Events", "Papyrus-Vitae", "Programming", "Quizzes", "Robotics"];
    console.log(categoriesString);
    data.categories.map(cat => console.log(cat))
    var radius = 50;
    // var clientWidth = document.getElementById('container1').clientWidth;
    // if (clientWidth < 500) {
    //     radius = 30;
    // }

    return (
        <div>
            <div>
                <div className="bar">
                    <i className="primary md fa fa-user" aria-hidden="true"></i>
                </div>
            </div>
            <div className="center">
                <h1 className="category-title">CATEGORIES</h1>
            </div>
            {/* <div className="menu-categories">
                {data.categories.map(cat => (
                    <div>
                        <div className='c-item'>
                            <div>
                                <div className="circle"></div>
                            </div>
                            <div>
                                {cat}
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <br></br>
            <div class="container1">
                {data.categories.map(cat => (
                    <div className="card">
                        <h3 className="title">{cat}</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                        </div>
                        <div className="circle1">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <div class="circle1"></div>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

        </div>)
}

export { Category };