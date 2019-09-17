class App extends React.Component {
    state = {
        items: [
            {id: 1, name: "tea", active: true},
            {id: 2, name: "potatoes", active: false},
            {id: 3, name: "groats", active: false},
            {id: 4, name: "water soup", active: true},
            {id: 5, name: "boiling water", active: false},
            {id: 6, name: "bread", active: false},
        ],
    };
    handleChangeStatus = id => {
        const items = this.state.items.map(item => {
            if (id === item.id) {
                item.active = !item.active;
            }
            return item;
        });
        this.setState({
            items
        })
    };


    render() {
        return (
            <React.Fragment>
                <Header items={this.state.items}/>
                <ListItems items={this.state.items} changeStatus={this.handleChangeStatus}/>
            </React.Fragment>
        )
    }
}
