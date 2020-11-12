import { React, useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import Keys from "../config.keys";
const EventDescription = () => {

    let { category, event } = useParams();
    let [eventDetails, setEventDetails] = useState({});
    useEffect(() => {
        const getEventDetails = async () => {
            try {
                var url = Keys.BASE_API + '/events/description?eventCategory='+category+'&eventName='+event;
                console.log(url)
                var response = await axios.get(url);
                console.log(response.data.data);
                setEventDetails(response.data.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getEventDetails();
    }, []);
    return (<div>
        EventDescription page with category name {category} and event name {event} coming soon...

    </div>)
}
export { EventDescription };

