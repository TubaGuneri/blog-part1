import posts from "./../../constants/data.json"
import {Link} from "react-router-dom";
import './Overview.css';



function Overzicht() {

    return(
        <>
            <section className='overview-section outer-content-container'>
           <div className= 'inner-content-container'>
            <h1>Bekijk alle {posts.length} posts op het platform</h1>

               <ul  className= 'post-list'>
                   {posts.map((post) => {
                   return <li key={post.id} className='post-item'>
                       <h2 className='post-title'><Link to={`/posts/${post.id}`}>{post.title}</Link>({post.author})</h2>
                   <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                   </li>
                   })}
               </ul>
           </div>
            </section>

            {/*<h2>{console.log(posts)}</h2>*/}

            {/*{posts.map( (post) => {*/}
            {/*    return (*/}
            {/*        <article key={post.id} className= 'post-container'>*/}
            {/*            <span className={'title-and-author'}>*/}
            {/*                <h3><Link to={`/blog/${post.id}`}>{post.title} </Link></h3>*/}
            {/*                <i>{post.author}</i>*/}
            {/*            </span>*/}
            {/*            <i>{post.comments} reacties - {post.readTime} keer gelezen.</i>*/}

            {/*        </article>*/}

            {/*    )*/}
            {/*}) }*/}
        </>

    )
}
export default Overzicht;