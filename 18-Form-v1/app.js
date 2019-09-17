class Form extends React.Component {
    state = {
        city: "Londyn",
        text: "",
        isLoved: true,
        number: "2",
    };

    handleCityChange = event => {
        this.setState({
            city: event.target.value
        })
    };

    handleTextChange = event => {
        this.setState({
            text: event.target.value
        })
    };

    handleIsLovedChange = event => {
        this.setState({
            isLoved: event.target.checked
        })

    };

    handleVisitsNumberChange(event) {
        this.setState({
            number: event.target.value
        })
    };

    render() {
        return (
            <div>
                <label>
                    Enter the city
                    <input value={this.state.city} onChange={this.handleCityChange} type="text"/>
                </label>
                <br/>
                <label>Write something about this city
                    <textarea value={this.state.text} onChange={this.handleTextChange}/>
                </label>
                <br/>
                <label>
                    Do you like this city
                    <input type="checkbox" checked={this.state.isLoved}
                           onChange={this.handleIsLovedChange}/>
                </label>
                <br/>
                <label>
                    How many times have you been to this city?
                    <select value={this.state.number}
                            onChange={this.handleVisitsNumberChange.bind(this)}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="more">more</option>
                    </select>
                </label>
            </div>
        )
    }
}


ReactDOM.render(<Form/>, document.getElementById('root'));
