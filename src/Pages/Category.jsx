import { React, useState, useEffect} from 'react';
import axios from 'axios';
import Key from "../config.keys";

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
    console.log(data);
    return (
    <div>
        Category page coming soon...
    </div>)
}

export {Category};