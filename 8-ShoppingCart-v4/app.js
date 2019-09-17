class App extends React.Component {
    state = {
        availableProducts: 7,
        shoppingCart: 0
    };

    handleRemoveFromCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1
        })
    };

    handleAddToCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart + 1
        })
    };

    handleBuy = () => {
        this.setState({
            availableProducts: this.state.availableProducts - this.state.shoppingCart,
            shoppingCart: 0
        })
    };

    render() {
        const {shoppingCart, availableProducts} = this.state;
        const style = shoppingCart === 0 ? {opacity: .3} : {};

        return (
            <>
                <button
                    disabled={shoppingCart === 0}
                    onClick={this.handleRemoveFromCart}>-
                </button>
                <span style={style}> {shoppingCart} </span>
                <button
                    disabled={shoppingCart === availableProducts}
                    onClick={this.handleAddToCart}>+
                </button>
                {shoppingCart > 0 && <button onClick={this.handleBuy}>Buy</button>}
            </>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));