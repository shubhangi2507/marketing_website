/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from  './Navigation/Navigation.js';


const RootComponent = () => {
    return (
        <div>
            <BrowserRouter>
                    <Navigation/>
            </BrowserRouter>
        </div>
    );
};

export default RootComponent;