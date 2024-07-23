import { useState } from 'react';
type AuthUser = {
    name: string;
    email: string;
};
function User() {
    const [user, setUser] = useState<AuthUser | null>(null);

    function handleLogin() {
        setUser({ name: 'frankie', email: 'frankie@mail.com' });
    }
    function handleLogout() {
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>user name is {user?.name}</div>
            <div>user email is {user?.email}</div>
        </div>
    );
}

export default User;
