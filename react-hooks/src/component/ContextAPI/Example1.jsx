import { createContext } from 'react';
import Form from './Form';

export const ThemeContext = createContext(null);

function Example1() {
    return (
        <div>
            <h1>useContext</h1>
            <ThemeContext.Provider value="ma chikne">
                <Form />
            </ThemeContext.Provider>
        </div>
    );
}

export default Example1;
