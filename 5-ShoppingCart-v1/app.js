class App extends React.Component {
    state = {
        availableProducts: 7,
        shoppingCart: 0
    };

    handlerRemoveFromCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1
        })
    };

  handlerAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    })
  };

    render() {
        return (
            <>
                <button
                    disabled={this.state.shoppingCart === 0}
                    onClick={this.handlerRemoveFromCart}>-
                </button>
                <span> {this.state.shoppingCart} </span>
                <button
                    disabled={this.state.shoppingCart === this.state.availableProducts}
                    onClick={this.handlerAddToCart}>+
                </button>
            </>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));