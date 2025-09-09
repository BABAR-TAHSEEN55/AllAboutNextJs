import type { Metadata } from "next";
import Counter from "./Counter.tsx";
export const metadata: Metadata = {
    title: "Hola",
};

const CounterPage = () => {
    return (
        <div>
            <Counter />
        </div>
    );
};

export default CounterPage;
//NOTE : Cannot have metadata with use client
