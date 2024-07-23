import { useEffect } from 'react';
import { useState } from 'react';

function Example1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // setTimeout(() => {
        //     setCount(count + 1);
        // }, 1000);
        // setInterval(() => {
        setCount(count + 1);
        // }, 1000);
    }, []);

    return (
        <div>
            <h2>UseEffectHook</h2>
            <p>{count}</p>
        </div>
    );
}

export default Example1;
