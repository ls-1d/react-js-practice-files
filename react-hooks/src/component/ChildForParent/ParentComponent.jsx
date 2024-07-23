/* eslint-disable react/prop-types */
import { useCallback, useState } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent() {
    console.log('from parent');
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    // function incAge() {
    //     setAge(age + 1);
    // }

    const incAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    // function incSalary() {
    //     setSalary(salary + 1000);
    // }

    const incSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <div>
            <Title text="Age" count={age} />
            <Button handleClick={incAge}> Increment Age </Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incSalary}> Increment Salary</Button>
        </div>
    );
}

export default ParentComponent;
