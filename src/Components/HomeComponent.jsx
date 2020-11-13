import React from 'react';
import LoginButton from './LoginButton';
import {Link} from 'react-router-dom';
const HomeComponent = () => {

    return (
        <div>
            <Link to='/user' >User Icon</Link>
            <h1>bruh workin.</h1>
            <LoginButton />
        </div>
    )
}
export { HomeComponent };