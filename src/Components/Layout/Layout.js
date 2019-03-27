import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Header from '../Header/Header';

const layout = (props) => (
    <Aux>
        <Header />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;