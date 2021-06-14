const ListObject = () => {
    const users = [
        {id: 1, name: 'Cat', gender: 'Male'},
        {id: 2, name: 'Dog', gender: 'Female'},
        {id: 3, name: 'Elephant', gender: 'Male'},
        {id: 4, name: 'Giraffe', gender: 'Female'}
    ];

    const displayUser = users.map((user) => {
        return <li key={user.id}>{user.name} ({user.gender})</li>
    });

    return <ul>{displayUser}</ul>
}

export default ListObject;