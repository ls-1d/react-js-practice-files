import { useRef } from 'react';
import { useState, useEffect } from 'react';

function Example1() {
    const [inputValue, setInputValue] = useState('');

    const prevInputValue = useRef('');
    const count = useRef(0);
    const inputElement = useRef();

    useEffect(() => {
        prevInputValue.current = inputValue;
        count.current = count.current + 1;
    }, [inputValue]);

    useEffect(() => {
        inputElement.current.focus();
    }, []);

    return (
        <div>
            <h2>UseRefHook</h2>
            <input type="text" ref={inputElement} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

            <p>Current Value: {inputValue} </p>
            <p>Previous Value:{prevInputValue.current} </p>
            <p>Render Count: {count.current} </p>
            <button>Click Me!</button>
        </div>
    );
}

export default Example1;
