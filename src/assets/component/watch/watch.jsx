
import React from 'react';

const watch = ( {watch} ) => {
    const {name, price, color, id} = watch;
    console.log('name ', name)
    return (
        <div>
        <h2>Name : {name} </h2>
        <p>Id : {id} </p>
        <p>Price : {price} </p>
        <p>Color : {color} </p>
        
        </div>
        
    );
};

export default watch;