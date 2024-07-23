import React from 'react';
function Title({ text, count }) {
    console.log('from Title');
    return (
        <div>
            <p>
                {text} : {count}
            </p>
        </div>
    );
}

export default React.memo(Title);
