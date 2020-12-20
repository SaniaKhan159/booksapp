import React from 'react';
function Books(props){
    return(
        <div>
            <h2>{props.firstCol}</h2>
            <h2>{props.secondCol}</h2>
            <h2>{props.thirdCol}</h2>
            <h2>{props.fourthCol}</h2>
        </div>
    )
}

export default Books;