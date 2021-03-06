import React from 'react'

class CardList extends React.Component {
    render() {
        let elements = this.props.item.map((element) => {
            return (<li key={element.id}>{element.name}</li>)
        })
        return <ul>{elements}</ul>
    }
}


module.exports = CardList;
