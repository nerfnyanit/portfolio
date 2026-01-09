"use client"

import { useState } from "react"

type useCounterReturn = {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    count: number;
}
 
const INITIAL_COUNT = 0;

export default function useCounter():useCounterReturn {
    const [count, setCount] = useState(INITIAL_COUNT);

    const increment = ():void => setCount(prev => prev + 1);
    const decrement = ():void => {
        if(count <= 0) return;

        setCount(prev => prev - 1);
    }

    const reset = ():void => {
        setCount(0);
    }

    return{
        count,increment,decrement,reset
    }
}
