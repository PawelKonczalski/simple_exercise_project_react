const PositiveMessage = () => <p>You can watch the movie</p>;
const NegativeMessage = () => <p>You can't watch the movie</p>;

class CheckboxAgeConfirmation extends React.Component {

    state = {
        isConfirmed: false,
    };

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed
        })
    };

    displayMassage() {
        if (this.state.isConfirmed) {
            return <PositiveMessage/>
        } else {
            return <NegativeMessage/>
        }
    }

    render() {
        return (
            <>
                <h1>Buy a ticket for the horror of the yea!r</h1>
                < input type="checkbox" id='age' onChange={this.handleCheckboxChange}
                        checked={this.state.isConfirmed}/>
                < label htmlFor="age">I am at least 16 years old</label>
                {this.displayMassage()}
            </>
        )
    }
}

ReactDOM.render(<CheckboxAgeConfirmation/>, document.getElementById('root'));