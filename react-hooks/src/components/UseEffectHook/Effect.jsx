import { useEffect, useState } from 'react';
function Effect() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!res) return;
            const data = await res.json();
            setUsers(data);
        }
        fetchUsers();
    }, []);
    return (
        <div>
            <h1> UseEffect </h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id} - {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Effect;
