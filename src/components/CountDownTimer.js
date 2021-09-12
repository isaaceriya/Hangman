/* 
* Code for the timer, this is just a file where I kept the code in but the actual code
* is in the app file already
*
*/


import React from 'react'
import { timerValue } from '../helpers/helpers';

const CountDownTimer = () => {

    const seconds = 3 ;
    const [[secs], setTime] = React.useState([seconds]);

    const tick = () => {
        if (secs === 0) {
            reset()
        }
            else {
            setTime([secs - 1]);
            }
    };

    const reset = () => setTime([parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}




export default CountDownTimer;