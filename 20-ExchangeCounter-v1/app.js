// const Dollars = props => {
//     return <div>Value in USD: {props.cash <= 0 ? '' : (props.cash / props.ratio).toFixed(2)} </div>
// };
//
// const Euros = props => {
//     return <div>Value in EUR:{props.cash <= 0 ? '' : (props.cash / props.ratio).toFixed(2)} </div>
// };

const Cash = props => {
    return <div>Value in EUR:{props.cash <= 0 ? '' : (props.cash / props.ratio).toFixed(2)} </div>
};

class ExchangeCounter extends React.Component {

    state = {
        amount: "",
        ratioDollar: 3.6,
        ratioEuro: 4.2,
    };

    handleChange = e => {
        this.setState({
            amount: e.target.value
        })
    };

    render() {
        const {amount, ratioDollar, ratioEuro} = this.state;

        return (
            <div>
                <label>
                    <input type='number'
                           value={amount}
                           onChange={this.handleChange}/>
                </label>
                {/*<Dollars cash={amount} ratio={ratioDollar}/>*/}
                {/*<Euros cash={amount} ratio={ratioEuro}/>*/}
              <Cash cash={amount} ratio={ratioDollar} title='Value in USD: '/>
              <Cash cash={amount} ratio={ratioEuro} title='Value in EUR: '/>
            </div>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'));
