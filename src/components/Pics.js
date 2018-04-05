import React from "react";
// import images from "./API";

export default class Pics extends React.Component{
    render(){
        return (
            <div role="img" className="click-item">
                <img className="image" src={this.props.src} id={this.props.id} alt={this.props.id} onClick={this.onClick}/>
            </div>
        );
    }
    onClick = () => this.props.shuffle(this.props.id);
}
