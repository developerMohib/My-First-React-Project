
// import React from 'react';
import './sunglass.css';
import '../watch/watch'
import { add, multiply } from '../../../utilitis/calculate';
// import add from '../../../utilitis/calculate';

const sunglass = () => {

    const num1 = 20;
    const num2 = 30;
    const sum = add(num1 , num2);
    const mult = multiply(num1, num2);

    return (
        <div>
            <p> sum : {sum} </p>
            <p> mult : {mult} </p>
            <h2>My connection</h2>
        </div>
    );
};

export default sunglass;