import { useContext } from 'react';
import { UserContext } from './Example1';
function Child2() {
    const user = useContext(UserContext);
    return (
        <div>
            <h2>child2</h2>
            <p>Hello!, {user} [---from child2]</p>
        </div>
    );
}

export default Child2;
