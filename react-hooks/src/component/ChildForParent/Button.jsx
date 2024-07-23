import React from 'react';
function Button({ handleClick, children }) {
    console.log('from Button');
    return (
        <div>
            <button onClick={() => handleClick()}>{children}</button>
        </div>
    );
}

export default Button;
