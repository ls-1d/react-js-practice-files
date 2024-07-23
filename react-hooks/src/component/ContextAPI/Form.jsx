import { useContext } from 'react';
import { ThemeContext } from './Example1';

function Form() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <p>form</p>
            {theme}
        </div>
    );
}

export default Form;
