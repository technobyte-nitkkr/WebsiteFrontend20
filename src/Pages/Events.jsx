import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Key from '../config.keys';
const Events = props => {
    const category = props.match.params.category;
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        const getEvents = async () => {
            try {
                const res = await axios.get(
                    `${Key.BASE_API}/events/description?eventCategory=${category}`,
                );
                setData(res.data.data);
            } catch (error) {
                setError(true);
                console.log(error);
            }
        };
        getEvents();
    }, [category]);
    console.log(data);
    return (
    <div>
        Events page coming soon...
    </div>
    )
}

export {Events};