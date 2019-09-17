class App extends React.Component {

    state = {
        charm: ['you will have a great day', 'you are in bad luck today', 'you will regret that you have risen from bed today'],
        value: null,
        newCharm: ''
    };

    handleDivination = () => {
        this.setState({
            value: Math.floor(Math.random() * this.state.charm.length)
        })
    };

    showDivination() {
        return this.state.charm[this.state.value];
    }

    handleNewCharm = e => {
        this.setState({
            newCharm: e.target.value
        })
    };

    handleAddNewCharm = () => {
        if (this.state.newCharm.trim() === '') {
            alert("You don't insert new charm")
        } else {
            const charm = this.state.charm.concat(this.state.newCharm);
            this.setState({
                charm,
                newCharm: ''
            });
            alert(`You add ${this.state.newCharm} to charm list`);
        }
    };

    render() {
        return (
            <>
                <button onClick={this.handleDivination}>See the divination</button>
                <br/>
                <label>
                    <input name='newCharm'
                           type='text'
                           value={this.state.newCharm}
                           onChange={this.handleNewCharm}/>
                    <button onClick={this.handleAddNewCharm}>Add the divination</button>
                </label>
                <div className='show'>{this.showDivination()}</div>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));