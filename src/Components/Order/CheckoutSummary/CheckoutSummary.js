import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>I hope you enjoy your burger</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
                btnType="Danger"
                clicked={props.cancelledOrder}>CANCEL
            </Button>
            <Button 
                btnType="Success"
                clicked={props.continuedOrder}>CONTINUE
            </Button>
        </div>
    );
}

export default checkoutSummary;