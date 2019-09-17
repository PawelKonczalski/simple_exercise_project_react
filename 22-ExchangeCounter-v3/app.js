const Cash = props => {
    return <div>Value in
        EUR:{props.cash <= 0 ? '' : (props.cash / props.ratio * props.price).toFixed(2)} </div>
};

class ExchangeCounter extends React.Component {

    state = {
        amount: "",
        product: "electricity",
    };

    static defaultProps = {
        currencies: [
            {
                id: 0,
                name: 'zloty',
                ratio: 1,
                title: 'Value in zloty'
            }, {
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
        ],

        price: {
            electricity: .51,
            gas: 4.76,
            oranges: 3.79
        }
    };

    handleChange = e => {
        this.setState({
            amount: e.target.value
        })
    };

    handleSelect = e => {
        this.setState({
            product: e.target.value,
            amount: ''
        })
    };

    insertSuffix(select) {
        if (select === 'electricity') {
            return <em>kWh</em>
        } else if (select === 'gas') {
            return <em>liters</em>
        } else if (select === 'oranges') {
            return <em>kilograms</em>
        } else {
            return null
        }
    };

    selectPrice(select) {
        return this.props.price[select];
    }

    render() {
        const {amount, product} = this.state;
        const price = this.selectPrice(product);

        const calculators = this.props.currencies.map(currency =>
            (<Cash key={currency.id}
                   ratio={currency.ratio}
                   title={currency.title}
                   cash={amount}
                   price={price}/>));
        return (
            <div>
                <label>Select a product:
                    <select value={product} onChange={this.handleSelect}>
                        <option value="electricity">electricity</option>
                        <option value="gas">gas</option>
                        <option value="oranges">oranges</option>
                    </select>
                </label>
                <br/>
                <label>
                    <input type='number'
                           value={amount}
                           onChange={this.handleChange}/>
                    {this.insertSuffix(this.state.product)}
                </label>
                {calculators}
            </div>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'));
