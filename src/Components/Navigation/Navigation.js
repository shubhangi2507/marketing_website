import React from 'react';
import { NavLink } from 'react-router-dom';
import SwitchComponent from '../../Route/Route';

const Navigation = () =>{
return (
        <React.Fragment>
        <div className="ui secondary pointing menu">
                <NavLink className="active item" exact  to="/">Home</NavLink>
                <NavLink className="item" to="/Contact">Contact us</NavLink>
                <div className="right menu">
                        <NavLink className="ui item" to="/SignUp">Sign Up</NavLink>
                        <NavLink className="ui item" to="/Login">Login</NavLink>
                </div>
        </div>
        <>
        {SwitchComponent}
        </>
        </React.Fragment>
);
};

export default Navigation;