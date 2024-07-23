import { useState } from 'react';

function Counter01() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incOne = () => {
        setCounterOne(counterOne + 1);
    };

    const incTwo = () => {
        setCounterTwo(counterTwo + 1);
    };

    const isEven = () => {
        return counterOne % 2 === 0;
    };

    const isOdd = counterTwo % 2 !== 0;

    return (
        <div>
            <p>
                <button onClick={incOne}>One: {counterOne}</button>
                <span>{isEven() ? 'Even' : 'Odd'}</span>
            </p>
            <p>
                <button onClick={incTwo}>Two: {counterTwo}</button>
                <span>{isOdd ? 'Odd' : 'Even'}</span>
            </p>
        </div>
    );
}

export default Counter01;
