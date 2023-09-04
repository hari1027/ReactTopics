import React from 'react';
import './style.css';
import styles from '../CssStyles.module.css';


const mystyle={
    color:"red"
}

export function MyStyleSheets() {
    return(
        <div>
           
            <h1 style={mystyle}>
            InlineStyles 
            </h1>
            <h1 className='class2'>
            style sheet Inside Components
            </h1>
            <h1 className={styles.sucess}>
            style sheet outside Components
            </h1>
        </div>
    )
 }