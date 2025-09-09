"use client";
import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount((count) => count + 1);
    };
    const Decrement = () => {
        setCount((count) => count - 1);
    };
    return (
        <div>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Increment}>Increment</button>
            <h1>{count}</h1>
        </div>
    );
};
export default Counter;
