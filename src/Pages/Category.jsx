import { React, useState, useEffect} from 'react';
import axios from 'axios';
import Key from "../config.keys";
import './categories.css'
const Category = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        const getEvents = async () => {
            try {
                const res = await axios.get( `${Key.BASE_API}/events/categories`);
                setData({ ...res.data.data });
            } catch (error) {
                setError(true);
                console.log(error);
            }
        };
        getEvents();
    }, []);
    console.log(data.categories);
    var categoriesString=[];
    // for (var [index,value] of data.categories.entries()){
    //     var str = "";
    //     // str=<div className='c-item'> 
    //     //         <div>
    //     //             <div className="circle"></div>
    //     //         </div>
    //     //         <div> {data.categories[cat]} </div>
        
    //     categoriesString.push(<div className='c-item'> <div><div className='circle'></div></div><div> {value} </div>);
    // }
    data.categories = ['astronomy','astronomy','astronomy','astronomy','astronomy','astronomy','astronomy','astronomy','astronomy',];
    console.log(categoriesString);
    data.categories.map(cat => console.log(cat))
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
        <div className="menu-categories">
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
            ) ) }
        </div> 
       
    </div>)
}

export {Category};