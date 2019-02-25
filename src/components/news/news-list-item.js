import React from "react";
import {
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Row,
    Col,
    Button
} from "reactstrap";
import { FaClock } from "react-icons/fa";
import moment from "moment";

const NewsListItem = ({ blog }) => {
    // console.log(blog);
    const published = moment(blog.publish).fromNow();
    return (
        <ListGroupItem className="News-Item" tag="a" href={blog.defaultUrl}>
            <Row className="align-items-center">
                <Col
                    className="News-Item-info"
                    xs={{ size: 12, order: 2 }}
                    md={{ size: 9, order: 1 }}>
                    <ListGroupItemHeading>{blog.title}</ListGroupItemHeading>
                    <ListGroupItemText>{blog.summary}</ListGroupItemText>
                    <ListGroupItemText className="published">
                        <FaClock /> {published}
                    </ListGroupItemText>
                </Col>
                <Col xs={{ size: 12, order: 1 }} md={{ size: 3, order: 2 }}>
                    <img
                        className="img-fluid"
                        src={blog.thumbnail.url}
                        alt={blog.title}
                    />
                </Col>
            </Row>
        </ListGroupItem>
    );
};

export default NewsListItem;
