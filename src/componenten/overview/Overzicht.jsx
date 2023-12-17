import React from "react";
import posts from "./../../constants/data.json"
import {Link, useParams} from "react-router-dom";



function Overzicht() {

    return(
        <>
            <h1>Blogposts</h1>
            <h3>Aantal: {Object.keys(posts).length}</h3>
            <h2>{console.log(posts)}</h2>

            {posts.map( (post) => {
                return (
                    <article key={post.id} className= 'post-container'>
                        <span className={'title-and-author'}>
                            <h3><Link to={`/blog/${post.id}`}>{post.title} </Link></h3>
                            <i>{post.author}</i>
                        </span>
                        <i>{post.comments} reacties - {post.readTime} keer gelezen.</i>

                    </article>

                )
            }) }
        </>

    )
}
export default Overzicht;