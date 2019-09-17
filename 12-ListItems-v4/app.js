const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Arek",
            sex: "male"
        },
        {
            id: 2,
            age: 49,
            name: "Marta",
            sex: "female"
        },
        {
            id: 3,
            age: 19,
            name: "Stasia",
            sex: "female"
        },
        {
            id: 4,
            age: 24,
            name: "Karol",
            sex: "male"
        },
    ]
};


const Item = ({user}) =>(
    <div className='userInfo'>
        <h1>User: {user.name}</h1>
        <p><strong>User information</strong></p>
        <p> age: {user.age}</p>
        <p> sex: {user.sex}</p>
    </div>
);

class ListItems extends React.Component {

    render() {
        let users = this.props.data.users;
        users = users.filter(user=> user.sex === 'female'); //male or female
        const Items = users.map(user => <Item key={user.id} user={user}/>);

        return (
            <>
                <ul>
                    {Items}
                </ul>
            </>
        )
    }
}

ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'));
