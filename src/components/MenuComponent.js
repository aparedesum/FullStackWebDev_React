import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        });
    }

    renderDish(dish) {
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

    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card key={dish.id}
                        onClick={() => { this.onDishSelect(dish) }}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}>
                        </CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <DishDetail dish={this.state.selectedDish}></DishDetail>
                    </div>
                </div>
            </div>
        );
    }

}

export default Menu;