const ValidationMessage = props => {
    const {txt} = props;
    return <p>{txt}</p>;
};

const OrderForm = (props) => {
    const {submit, change, isConfirmed} = props;

    return (
        <form onSubmit={submit}>
            < input type="checkbox" id='age' onChange={change}
                    checked={isConfirmed}/>
            < label htmlFor="age">I am at least 16 years old</label>
            <br/>
            <button type='submit'>Bay ticket</button>
        </form>
    )
};

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
                return <ValidationMessage txt='You can watch the movie'/>
            } else {
                return <ValidationMessage txt="You can't watch the movie"/>
            }
        } else {
            return null;
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.ifFormSubmitted) {
            this.setState({
                ifFormSubmitted: true
            })
        }
    };

    render() {
        const {isConfirmed} = this.state;

        return (
            <>
                <h1>Buy a ticket for the horror of the year!</h1>
                <OrderForm
                    change={this.handleCheckboxChange}
                    submit={this.handleFormSubmit}
                    isConfirmed={isConfirmed}
                />
                {this.displayMassage()}
            </>
        )
    }
}

ReactDOM.render(<TicketShop/>, document.getElementById('root'));