import React, { Component } from 'react';
// import classes from './OrderSummary.module.css'
import Aux from '../../../hoc/Auxallary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{

    //this could be a functional component
    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}
                </span>: {this.props.ingredients[igKey]}
            </li>)
        })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A Delicious Burger With The Following Ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout</p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
                    
        )
    }
}



export default OrderSummary;