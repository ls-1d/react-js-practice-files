import { useState, useEffect } from 'react';

function HookUseEffect() {
    const [count, setCount] = useState(0);
    useEffect(
        function () {
            document.title = `You clicked ${count} times`;
        },
        [count]
    );
    return (
        <div>
            <h1>UseEffect</h1>
            {count}
            <button onClick={() => setCount((c) => c + 1)}>inc</button>
        </div>
    );
}

export default HookUseEffect;
