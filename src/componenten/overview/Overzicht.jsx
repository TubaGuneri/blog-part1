import React from "react";
import posts from "./../constants/data.json"
import {Link} from "react-router-dom";

function Overzicht({posts}) {
    return(
        <>
            <h1>Blogposts</h1>
            <h3>Aantal: {Object.keys(posts).length}</h3>
            <h2>{console.log(posts[0].created)}</h2>

            {posts.map( ({author, comments, id, readTime, title}) => {
                return (
                    <article key={id} className= 'post-container'>
                        <span className={'title-and-author'}>
                            <h3><Link to={`/blog/${id}`}>{title}</Link></h3>
                            <i>{author}</i>
                        </span>
                        <i>{comments} reacties - {readTime} keer gelezen.</i>
                    </article>
                )
            }) }
        </>

    )
}
export default Overzicht;