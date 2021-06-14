const ListObjectConditional = () => {
    const users = [
        {id: 1, name: 'Cat', gender: 'Male (Conditional)'},
        {id: 2, name: 'Dog', gender: 'Female (Conditional)'},
        {id: 3, name: 'Elephant', gender: 'Male (Conditional)'},
        {id: 4, name: 'Giraffe', gender: 'Female (Conditional)'}
    ];

    return <ul>
        {users.length > 0 && users.map((user) => {
            return <li key={user.id}> {user.name} ({user.gender})</li>
        })}
    </ul>
}

export default ListObjectConditional;