import React from 'react';
import Aux from '../../hoc/Auxallary';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>
        tlbar, sidedrawer, backdrop
        </div>
        <main className={classes.Content  }>
            {props.children}
        </main>
    </Aux>
    
)

export default layout;