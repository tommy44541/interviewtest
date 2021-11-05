import React,{useEffect, useState} from 'react';
import "./Counter.scss";
import CountDownTimer from './CountDownTimer';

const Counter = () => {
    const [seconds] = useState(86400)
    

    return (
        <>
        <div className="counter">
            倒數:<span><CountDownTimer
                        seconds={seconds}
                        onTimeUp={()=>{console.log('time up')}} 
                        />
            </span>
        </div>
        </>
    );
};

export default Counter;