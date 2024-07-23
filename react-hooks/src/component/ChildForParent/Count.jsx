import React from 'react';
function Count({ text, count }) {
    console.log('from Count');
    return (
        <p>
            {text}: {count}
        </p>
    );
}

export default React.memo(Count);
