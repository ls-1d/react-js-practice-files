import { createContext } from 'react';
import Child1 from './Child1';

export const UserContext = createContext('🧑');

function Example1() {
    return (
        <div>
            <h2>ContextAPI</h2>
            <UserContext.Provider value="frankie">
                <Child1 />
            </UserContext.Provider>
        </div>
    );
}

export default Example1;
