type GreetProps = {
    name: string;
    messageCount?: number; // for the optional types
    isLoggedIn: boolean;
};
function Greet({ name, messageCount = 0, isLoggedIn }: GreetProps) {
    return (
        <>
            <h1> Hello! </h1>
            <h1>
                {name} - {messageCount} - {isLoggedIn && '😊'}
            </h1>
        </>
    );
}

export default Greet;
