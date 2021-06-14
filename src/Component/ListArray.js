const ListArray = () => {
    const users = [
        'Cat', 'Dog', 'Elephant', 'Giraffe'
    ];

    // const displayUser = users.map(user => user)
    // return <div>{displayUser}</div>

    // const displayUser = users.map((user) => <li key={user}>{user}</li>)
    // return <ul>{displayUser}</ul>
    
    const displayUser = users.map((user, index) => <li key={index}>{user}</li>)
    return <ul>{displayUser}</ul>
}

export default ListArray;