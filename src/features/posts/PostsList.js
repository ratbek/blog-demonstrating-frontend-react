import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectAllPosts } from './postsSlice'

const PostsList = () => {
  
  // const posts = useSelector(state => state.posts.entities);
  const posts = useSelector(selectAllPosts)


  const renderedPosts = posts.map(post => (
    <article className="post-item" key={post.id}>
      <div className="image-container">
        <img src={post.image_path} alt={post.image_name}/>
      </div>
      <div className="text-container">
        <button className="category"><Link to={post.category}>{post.category}</Link></button>
        <Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link>
        <p className="post-content">{post.content.substring(0, 100)}...</p>
      </div>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Latest Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList;