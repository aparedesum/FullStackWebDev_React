import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dish:props.dish
        }                    
    }

    render() {
        let dish = this.props.dish;

        if (dish === null) {
            return (<div></div>);
        }

        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}>
                </CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default DishDetail;