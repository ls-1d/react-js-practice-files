type Person = {
    name: {
        first: string;
        last: string;
    };
};
export default function Person({ name }: Person) {
    return (
        <div>
            <h1>
                {name.first} {name.last}
            </h1>
        </div>
    );
}
