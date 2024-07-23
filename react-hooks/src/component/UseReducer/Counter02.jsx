import { useReducer, useState } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

function Counter02() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [anotherCount, setAnotherCount] = useState(0);

    return (
        <div>
            <p>{state}</p>
            <p>
                {' '}
                <button onClick={() => dispatch({ type: 'inc' })}>Increment</button>
            </p>
            <p>
                {' '}
                <button onClick={() => dispatch({ type: 'dec' })}>Decrement</button>
            </p>
            <p>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </p>
            <p>{anotherCount}</p>
            <p>
                <button
                    onClick={() => {
                        setAnotherCount((anotherCount) => anotherCount + 1);
                    }}
                >
                    Increase Count
                </button>
            </p>
        </div>
    );
}

export default Counter02;

// useEffect(() => {
//     // const interval = setInterval(tick, 1000);
//     // return () => {
//     //     clearInterval(interval);
//     // };

//     interval();

//     return function () {
//         clearInterval(interval);
//     };
// }, []);
