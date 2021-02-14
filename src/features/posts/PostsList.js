import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectAllPosts } from './postsSlice'

const PostsList = ({latest, popular}) => {
  const posts = useSelector(selectAllPosts)

  let postsTitle = 'Latest posts';
  if (popular) {
    postsTitle = 'Popular posts';
  }

  const renderedPosts = posts.map(post => (
    <article className="post-item" key={post.id}>
      <div className="image-container">
        <img src={post.image_path} alt={post.image_name}/>
      </div>
      <div className="text-container">
        <button className="button category"><Link to={post.category}>{post.category}</Link></button>
        <Link to={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <p className="post-content">{post.content.substring(0, 500)}...</p>
      </div>
    </article>
  ))

  return (
    <section className="posts-list">
      <h1>{postsTitle}</h1>
      {renderedPosts}
    </section>
  )
}

export default PostsList;