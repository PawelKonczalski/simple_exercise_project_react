class Form extends React.Component {
    state = {
        city: "Londyn",
        text: "",
        isLoved: true,
        number: "2",
    };

    handleChange = event => {
        if (event.target.type === 'checkbox') {
            this.setState({
                [event.target.name]: event.target.checked
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    };


    render() {
        return (
            <div>
                <label>
                    Enter the city
                    <input name='city' value={this.state.city} onChange={this.handleChange}
                           type="text"/>
                </label>
                <br/>
                <label>Write something about this city
                    <textarea name='text' value={this.state.text} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Do you like this city
                    <input name='isLoved' type="checkbox" checked={this.state.isLoved}
                           onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    How many times have you been to this city?
                    <select name='number' value={this.state.number}
                            onChange={this.handleChange}>
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
