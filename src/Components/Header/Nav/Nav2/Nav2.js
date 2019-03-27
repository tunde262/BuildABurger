import React from 'react';
import classes from '../Nav1.module.css';

const nav2 = (props) => {
    return(
        <div className={classes.Nav2}>
            <nav className={classes.Right}>
                <li>Dashboard</li>
                <li>Inventory</li>
            </nav>
        </div>
    );
};

export default nav2;