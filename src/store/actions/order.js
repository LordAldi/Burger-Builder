
import axios from '../../axios-order'
import * as actionTypes from './actionTypes'

export const purchaseBurgerSucces = (id, orderData) => {
    return{
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return{
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return{
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post('/order.json?auth='+token,orderData)
        .then(response => {
            dispatch(purchaseBurgerSucces(response.data.name, orderData))
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error))
        });
    }
} 

export const purchaseInit = () => {
    return{
        type:actionTypes.PURCHASE_INIT
    }
}

export const fetchOrderSuccess = (orders)=> {
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}
export const fetchOrderFail = (error)=>{
    return{
        type: actionTypes.FETCH_ORDERS_FAIL,
        error:error
    }
}

export const fetchOrderStart = ()=>{
     return{
         type:actionTypes.FETCH_ORDERS_START,
     }
}
export const fetchOrders =(token, userId)=>{
     return dispatch=>{
        dispatch(fetchOrderStart())
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo"' + userId +'"'
        console.log(queryParams)
        axios.get('order.json' + queryParams)
        .then(res=> {
            const fetchedOrders = []
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                id: key
                });
            }
            // console.log(fetchedOrders)
            dispatch(fetchOrderSuccess(fetchedOrders))
        })
        .catch(err => {
            dispatch(fetchOrderFail(err))
        })
     }
}