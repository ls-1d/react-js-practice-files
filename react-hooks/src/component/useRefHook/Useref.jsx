import { useEffect, useRef, useState } from 'react';

function Useref() {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        function handleClick() {
            inputRef.current.focus();
        }
        handleClick();
    }, []);

    function getText(e) {
        e.preventDefault();
        console.log(inputRef.current.value);
        setValue(inputRef.current.value);
    }

    return (
        <div>
            <h2>useRef Hook</h2>
            <form onSubmit={(e) => getText(e)}>
                <input type="text" ref={inputRef} />
                <p></p>
                <button className="btn">Click Me!</button>
                <p>{value}</p>
            </form>
        </div>
    );
}

export default Useref;
