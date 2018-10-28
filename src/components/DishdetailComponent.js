import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({ comments }) {
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

function RenderDish({ dish }) {
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

const DishDetail = (props) => {
    let dish = props.dish;
    if (!dish) {
        return (<div></div>);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish}></RenderDish>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments coments={dish.comments}></RenderComments>
                </div>
            </div>
        </div>
    );
}


export default DishDetail;