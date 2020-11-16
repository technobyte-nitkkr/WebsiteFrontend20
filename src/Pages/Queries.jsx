import { React, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Keys from "../config.keys";
import Store from '../Store/Store';

const Queries = () => {

    const [ state, dispatch ] = useContext(Store);
    const [ formData, setFormData ] = useState({
        email : '',
        text : ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        send(formData);
        setFormData({
            email: '',
            text: ''
        });
    };

    const send = async formData => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: state.token
                }
            }
            const body = JSON.stringify(formData);
            await axios.post(
                `${Keys.BASE_API}/query`,
                body,
                config
            );
            {/*
            
            dispatch({
                type: 'ADD_ERROR',
                payload: { msg: 'query added.' }
            });
            setTimeout(() => {
                dispatch({
                    type: 'REMOVE_ERRORS'
                });
            }, 3000);
            
            */}
            
        } catch (error) {
            {/*
            dispatch({
                type: 'ADD_ERROR',
                payload: { msg: 'Something went wrong.'}                
            });
            setTimeout(() => {
                dispatch({
                    type: 'REMOVE_ERRORS'
                });
            }, 3000);
            */}
            console.log(error);
        }
    };

    return (
        <div>
            <div>
                <Link to='/user'>
                    <div className="bar">
                        <i className="primary md fa fa-user" aria-hidden="true"></i>
                    </div>
                </Link>
            </div>
            <h3 className = "query-hd">Ask your Query</h3>
            <div className = "form-container">
                <form onSubmit = {handleSubmit} method = "POST">
                    <div className = "form-ele">
                        <input
                            name = "email"
                            required = "required" 
                            type = "email"
                            placeholder = "Email"
                            onChange = {handleChange}
                        />
                    </div>          
                    <div className = "form-ele">
                        <textarea 
                            name = "text"
                            required = "required"
                            type = "text"
                            rows = "7"
                            cols = "60"
                            placeholder = "Write your query..."
                            onChange = {handleChange}
                        />
                    </div>
                    <div className = "query-send">
                        <button type = "submit" className = "query-send-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export {Queries};