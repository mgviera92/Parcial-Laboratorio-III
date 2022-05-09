import React from 'react';

function Cats(props) {
    console.log(props)
    return(
        <img src={props.imagen} height={350} width={400} />
    );
}

export default Cats;