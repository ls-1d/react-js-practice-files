import { useState } from 'react';

function HookCounterFour() {
    const [items, setItems] = useState([]);
    console.log(items);
    function handleAddItem() {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1,
            },
        ]);
    }
    return (
        <div>
            <button onClick={handleAddItem}>Add a Number</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default HookCounterFour;
