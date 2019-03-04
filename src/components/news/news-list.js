import React from "react";
// import _ from "lodash";
import { Spinner, ListGroup } from "reactstrap";
import NewsListItem from "./news-list-item";

const NewsList = ({ news }) => {
    if (!news.blogs) {
        return (
            <div className="text-center">
                <Spinner style={{ color: "#ff8900", margin: "auto" }} />
            </div>
        );
    }
    const newsItems = news.blogs.map(blog => {
        return <NewsListItem key={blog.blogId} blog={blog} />;
    });

    return (
        <ListGroup style={{ backgroundColor: "transparent" }} flush>
            {newsItems}
        </ListGroup>
    );
};

export default NewsList;
