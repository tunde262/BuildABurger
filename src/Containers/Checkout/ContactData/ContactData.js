import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../Components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipcode: ''
        }
    }

    render() {

        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact info...</h4>
                <form>
                    <input className={classes.Input} type='text' name="text" placeholder='Your Name' />
                    <input className={classes.Input} type='email' name="email" placeholder='Your Email' />
                    <input className={classes.Input} type='text' name="street" placeholder='Your Street' />
                    <input className={classes.Input} type='text' name="text" placeholder='Zipcode' />
                    <Button btnType='Success'>ORDER</Button>
                </form>
                
            </div>
        );
    }
}

export default ContactData;