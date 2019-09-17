const Header = props => {

    const activeItems = props.items.filter(item => item.active);
    const number = activeItems.length;

    return(
        <header>
            <h2>Summary of commitment: {number}</h2>
            <h2>To pay: {number ? `${number * 10} euro` : "You don't order anything"}</h2>
        </header>
    )
};
