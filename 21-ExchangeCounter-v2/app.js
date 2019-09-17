const Cash = props => {
    return <div>Value in EUR:{props.cash <= 0 ? '' : (props.cash / props.ratio).toFixed(2)} </div>
};

class ExchangeCounter extends React.Component {

    state = {
        amount: "",
    };

    currencies = [
        {
            id: 1,
            name: 'dollar',
            ratio: 3.6,
            title: 'Value in dollar'
        },
        {
            id: 2,
            name: 'euro',
            ratio: 4.2,
            title: 'Value in euro'
        },
        {
            id: 3,
            name: 'pound',
            ratio: 4.8,
            title: 'Value in pound'
        }
    ];

    handleChange = e => {
        this.setState({
            amount: e.target.value
        })
    };

    render() {
        const {amount} = this.state;

        const calculators = this.currencies.map(currency =>
            (<Cash key={currency.id}
                   ratio={currency.ratio}
                   title={currency.title}
                   cash={amount}/>));
        return (
            <div>
                <label>
                    <input type='number'
                           value={amount}
                           onChange={this.handleChange}/>
                </label>
                {calculators}
            </div>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'));
