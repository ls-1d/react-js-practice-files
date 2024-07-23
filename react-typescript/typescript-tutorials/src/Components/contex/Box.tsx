import { useContext } from 'react';
import { ThemeContext } from './ThemeContex';

function Box() {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <div style={{ backgroundColor: theme.primary.main, color: theme.primary.main }}>Theme Context</div>
        </div>
    );
}

export default Box;
