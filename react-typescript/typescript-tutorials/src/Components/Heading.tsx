type heading = {
    children: string;
};
function Heading({ children }: heading) {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    );
}

export default Heading;
