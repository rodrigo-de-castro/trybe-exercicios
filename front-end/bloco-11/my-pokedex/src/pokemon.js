import React, { Component } from "react";

class Pokemon extends Component {
    render () {
        const {name, type, weightValue, weightUnit, image} = this.props;
        return <div className="pokemon">
            <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>Average weight: {weightValue}{weightUnit}</p>
            </div>
            <img src={image}/>
        </div>
    }
};

export default Pokemon