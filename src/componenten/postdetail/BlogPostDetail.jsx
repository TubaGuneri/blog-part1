import React from "react";
import {Link, useParams} from "react-router-dom";
import posts from "./../../constants/data.json";
import formatDate from './../helpers/convertdate.js';

function BlogPostDetail() {
    const {posts: {author, comments, content, created, shares, subtitle, title}}= useParams();
    return(
        <>

    <div>Blogs post detail</div>
    <h1> {title}</h1>
   <h2>{subtitle}</h2>
    <p>{content}</p>
    <p>Geschreven door ${author} op ${created}</p>
<p>{comments}- {shares} keer gedeeld</p>

    <h3>Terug naar de <Link to={'/overview'}> overzichtspagina</Link></h3>

        </>

    )
}

export default BlogPostDetail;