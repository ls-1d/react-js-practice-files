import { useState } from 'react';

const initialState = {
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
};

function Example() {
    const [car, setCar] = useState(initialState);
    const [inputValue, setInputValue] = useState('');

    function handleUpdateColor() {
        setCar((prevState) => ({ ...prevState, color: inputValue }));
    }

    return (
        <div>
            <h2>UseState</h2>
            <p>
                Brand: {car.brand} Model: {car.model} Year: {car.year} Color: {car.color}
            </p>
            <p>
                <label>Enter New Color</label>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />
                <button onClick={handleUpdateColor}>Update Color</button>
            </p>
        </div>
    );
}

export default Example;
