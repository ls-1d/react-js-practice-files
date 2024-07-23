import { useReducer } from 'react';

const initialState = {
    count: 0,
    step: 1,
};

function reducer(state, action) {
    switch (action.type) {
        case 'inc':
            return { ...state, count: state.count + +state.step };
        case 'dec':
            return { ...state, count: state.count - +state.step };
        case 'reset':
            return { count: 0, step: 1 };

        case 'setStep':
            return { ...state, step: action.payload };
    }
}

function CounterThree() {
    const [countt, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>Use Reducer</h1>
            <p>{countt.count}</p>

            <button
                onClick={() => {
                    dispatch({ type: 'inc' });
                }}
            >
                Inc
            </button>

            <button
                onClick={() => {
                    dispatch({ type: 'dec' });
                }}
            >
                dec
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <p>
                Increase By Step
                <input
                    type="text"
                    value={countt.step}
                    onChange={(e) => dispatch({ type: 'setStep', payload: +e.target.value })}
                />
            </p>
        </>
    );
}

export default CounterThree;
