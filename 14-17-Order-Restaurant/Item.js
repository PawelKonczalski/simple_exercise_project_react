const Item = props => (
    <li className={props.active ? 'enabled' : 'disable'}
        onClick={() => props.changeStatus(props.id)}>
        {props.name}</li>
);

// style={props.active ? {fontWeight: 'bold'} : {color: 'grey'}}