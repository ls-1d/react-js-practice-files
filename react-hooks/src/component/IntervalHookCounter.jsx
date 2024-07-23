import { useEffect, useState } from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        // const interval = setInterval(tick, 1000);
        // return () => {
        //     clearInterval(interval);
        // };

        function interval() {
            setInterval(tick, 1000);
        }

        interval();

        return function () {
            clearInterval(interval);
        };
    }, []);

    return <div>{count}</div>;
}

export default IntervalHookCounter;
