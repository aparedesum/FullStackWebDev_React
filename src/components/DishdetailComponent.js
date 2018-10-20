import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments == null) {
            return (<div></div>);
        }

        let commentsToReturn = comments.map(comment => {
            return (
                <div key={comment.id}>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <li>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, 
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    </ul>
                </div>
            );
        });
        return commentsToReturn;
    }

    renderDish(dish) {
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
        let dish = this.props.dish;
        if (!dish) {
            return (<div></div>);
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;