const PositiveMessage = () => <p>You can watch the movie</p>;
const NegativeMessage = () => <p>You can't watch the movie</p>;

class TicketShop extends React.Component {

    state = {
        isConfirmed: false,
        ifFormSubmitted: false
    };

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            ifFormSubmitted: false
        })
    };

    displayMassage = () => {
        if (this.state.ifFormSubmitted) {
            if (this.state.isConfirmed) {
                return <PositiveMessage/>
            } else {
                return <NegativeMessage/>
            }
        } else {
            return null;
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.ifFormSubmitted) {
            this.setState({
                ifFormSubmitted: true
            })
        }
    };

    render() {
        return (
            <>
                <h1>Buy a ticket for the horror of the year!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    < input type="checkbox" id='age' onChange={this.handleCheckboxChange}
                            checked={this.state.isConfirmed}/>
                    < label htmlFor="age">I am at least 16 years old</label>
                    <br/>
                    <button type='submit'>Bay ticket</button>
                </form>
                {this.displayMassage()}
            </>
        )
    }

}

ReactDOM.render(<TicketShop/>, document.getElementById('root'));