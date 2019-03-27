import React from 'react';
import classes from '../Nav1.module.css';

const nav1 = (props) => {
    return(
        <div className={classes.Nav1}>
            <h2 className={classes.Left}>Project Name</h2>
            <h2 className={classes.Right}>Sign Out</h2>
        </div>
    );
};

export default nav1;