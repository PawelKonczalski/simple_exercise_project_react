const Item = (props) => <li>{`Fruit ${props.content}`}</li>;

class ListItems extends React.Component {
    state = {
        items: ['apple', 'plum', 'pear']
    };

    render() {
        const Items = this.state.items.map(item=> <Item key={item} content={item}/>);

        return (
            <>
                <ul>
                    {Items}
                </ul>
            </>
        )
    }
}

ReactDOM.render(<ListItems/>, document.getElementById('root'));
