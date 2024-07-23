import { UserConsumer } from './UserContext';

const F = () => {
    return (
        <div>
            <h3>ComponentF</h3>
            <UserConsumer>
                {(user) => {
                    return <div> Hello, {user}</div>;
                }}
            </UserConsumer>
        </div>
    );
};

export default F;
