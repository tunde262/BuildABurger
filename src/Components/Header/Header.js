import React from 'react';
import classes from './Header.module.css';
import Nav1 from './Nav/Nav1/Nav1';
import Nav2 from './Nav/Nav2/Nav2';

const header = (props) => {
    return(
        <header className={classes.Header}>
            <Nav1 /> 
            <Nav2 />
        </header>
    );
};

export default header;