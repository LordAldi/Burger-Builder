import React from 'react';
// import classes from './OrderSummary.module.css'
import Aux from '../../../hoc/Auxallary'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}
            </span>: {props.ingredients[igKey]}
        </li>)
    })
return (

    <Aux>
        <h3>Your Order</h3>
        <p>A Delicious Burger With The Following Ingredients:</p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p>Continue to checkout</p>
    </Aux>
)};

export default orderSummary;