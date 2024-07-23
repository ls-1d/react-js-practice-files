type PersonListProps = {
    personList: {
        first: string;
        last: string;
    }[];
};

export default function PersonList({ personList }: PersonListProps) {
    return (
        <>
            {/* <div>{JSON.stringify(personList)}</div> */}
            {personList.map((person) => {
                return (
                    <li key={person.first}>
                        {person.first} {person.last}
                    </li>
                );
            })}
        </>
    );
}
