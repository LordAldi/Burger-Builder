import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.module.css'
import axios from '../../../axios-order'



class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street:'',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading:true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Aldi Anugra',
                address: {
                    street: 'testStreet',
                    zipCode: '31211',
                    country: 'italy'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/order.json',order)
        .then(response => {
            this.setState({loading:false })
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({loading:false })
        });

    }

    render(){
        let form = (<form>
            <input className={classes.Input} type='text' name='name' placeholder='yourname'/>
            <input className={classes.Input} type='email' name='email' placeholder='email'/>
            <input className={classes.Input} type='text' name='street' placeholder='street'/>
            <input className={classes.Input} type='text' name='posta;' placeholder='postal code'/>
            <Button btnType='Success' clicked={this.orderHandler}>Order</Button>
        </form>);
        if (this.state.loading){
            form= <Spinner/>
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData