import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function Example1() {
    const [inputValue, setInputValue] = useState('');
    const inputElement = useRef();
    const count = useRef(0);

    const focusInput = () => {
        inputElement.current.focus();
    };

    useEffect(() => {
        count.current = count.current + 1;
    });
    useEffect(() => {
        focusInput();
        // count.current = count.current + 1;
    }, []);

    return (
        <div>
            <h3>useRef</h3>
            <div>
                <p>
                    username: <input ref={inputElement} type="text" />
                </p>
                <p>
                    password: <input type="password" />
                </p>
            </div>

            <hr />
            <p>useRef is used to rack application renders</p>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h4>Render Count: {count.current}</h4>
        </div>
    );
}

export default Example1;
