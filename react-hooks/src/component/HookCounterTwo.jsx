import { useState } from 'react';

function HookCounterTwo() {
    const [count, setCount] = useState(0);
    function handleInc() {
        setCount((c) => c + 1);
    }
    function handleDec() {
        if (count <= 0) return;
        setCount((c) => c - 1);
    }
    function handleReset() {
        setCount(0);
    }
    return (
        <div>
            {count}
            <button onClick={handleInc}> INC</button>
            <button onClick={handleDec}> DEC</button>
            <button onClick={handleReset}> RESET</button>
        </div>
    );
}

export default HookCounterTwo;
