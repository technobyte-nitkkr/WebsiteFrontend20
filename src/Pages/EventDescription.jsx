import { React} from 'react';
import { useParams } from "react-router";
const EventDescription = () => {

    let {category,event}=useParams();

    return (<div>
        EventDescription page with category name {category} and event name {event} coming soon...
    </div>)
}

export {EventDescription};