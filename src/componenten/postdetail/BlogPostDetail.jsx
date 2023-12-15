import React from "react";
import {useParams} from "react-router-dom";

function BlogPostDetail() {
    const {id}= useParams();
    return(
        <>
<div>Blogs post detail {id}</div>
        </>
    )
}

export default BlogPostDetail;