import React, { Component } from "react";
import Pics from "./Pics";
import Api from "./API";
import {Row} from "./Row";
import {Container} from "./Container";

class Shuffle extends Component {
    state = {
        pics: Api,
        clicked:[],
        points:0
    };

    shufflepics = () => {
        this.setState({pics: Api.sort(() => Math.random() - 0.5),clicked:[],points:0});
    }

    componentDidMount(){
        this.shufflepics();
    }

    clickShuffle = id => {
        if(this.state.clicked.includes(id)){
            this.shufflepics();
        }
        else{this.setState({
            pics: Api.sort(() => Math.random() - 0.5),
            clicked:[...this.state.clicked,id],
            points:this.state.points+1
        })}
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.pics.map(pic=> (
                        <Pics key={pic.id} src={pic.imgsrc} id={pic.id} shuffle={this.clickShuffle}/>
                    ))}
                </Row>
            </Container>
            
        );
    }
}

export default Shuffle;