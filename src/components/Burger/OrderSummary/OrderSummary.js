import React from 'react';
// import classes from './OrderSummary.module.css'
import Aux from '../../../hoc/Auxallary'
import Button from '../../UI/Button/Button'

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
        <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout</p>
        <Button btnType='Danger' clicked={props.purchaseCanceled}>Cancel</Button>
        <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
)};

export default orderSummary;