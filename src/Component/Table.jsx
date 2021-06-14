const Table = () => {
const users = [
{id: 1, name: 'Cat', gender: 'Male', status: 'active'},
{id: 2, name: 'Dog', gender: 'Female', status: 'inactive'},
{id: 3, name: 'Elephant', gender: 'Male', status: 'active'},
{id: 4, name: 'Giraffe', gender: 'Female', status: 'inactive'}
];

return <div>
    <h1 className='text-center'>Users List Table</h1>
<table className='table table-bordered table-striped'>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        {users.length > 0 && users.map((user) => {
        const {id, name, gender, status} = user
        const dataStatus = status === 'active' ? 'bg-success' : 'bg-danger'
        const isActive = `badge ${dataStatus}`
        return <tr>
            <th>{id}</th>
            <th>{name}</th>
            <th>{gender}</th>
            <th><span className={isActive}>{status === 'active' ? 'Active': 'Deactive'}</span></th>
        </tr>
        })}
    </tbody>
</table>
</div>
}
export default Table;