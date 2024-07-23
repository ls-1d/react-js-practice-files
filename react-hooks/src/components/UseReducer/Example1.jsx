import { useReducer } from 'react';

const initialState = {
    count: 0,
    step: 1,
};

function reducer(state, action) {
    switch (action.type) {
        case 'inc':
            return { ...state, count: state.count + 1 };

        case 'dec':
            return { ...state, count: state.count - 1 };

        case 'reset':
            return { count: 0, step: 1 };

        default:
            console.log('Unknown');
    }
}

function Example1() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>UseReducerHook</h2>
            <p>{state.count}</p>
            <p>
                <button onClick={() => dispatch({ type: 'inc' })}>Inc</button>
                <button onClick={() => dispatch({ type: 'dec' })}>Dec</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </p>
        </div>
    );
}

export default Example1;
