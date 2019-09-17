class ListItems extends React.Component {
    state = {
        items: ['apple', 'plum', 'pear']
    };

    render() {
        return (
            <>
                <ul>
                    {this.state.items.map(item=> <li key={item}>{`fruit ${item}`}</li>)}
                </ul>
            </>
        )
    }
}

ReactDOM.render(<ListItems/>, document.getElementById('root'));
