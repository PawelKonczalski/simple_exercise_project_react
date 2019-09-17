const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Arek"
        },
        {
            id: 2,
            age: 49,
            name: "Marek"
        },
        {
            id: 3,
            age: 19,
            name: "Stasiek"
        },
        {
            id: 4,
            age: 24,
            name: "Karol"
        },
    ]
};


const Item = ({user}) =>(
    <div>
        <h1>User: {user.name}</h1>
        <h2> age: {user.age}</h2>
    </div>
);

class ListItems extends React.Component {
    // state = {
    //     items: ['apple', 'plum', 'pear']
    // };

    render() {
        const users = this.props.data.users;
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
