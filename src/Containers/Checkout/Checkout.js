import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';



class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1
        }
    }
    
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    cancelledOrder = () => {
        this.props.history.goBack();
    }

    continuedOrder = () => {
        this.props.history.replace('/checkout/contact-info');
    }

    render() {
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    cancelledOrder={this.cancelledOrder}
                    continuedOrder={this.continuedOrder}/>
                <Route path={this.props.match.path + '/contact-info'} component={ContactData} />
            </div>
        );
    }
}

export default Checkout;