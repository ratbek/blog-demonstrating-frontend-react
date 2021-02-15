import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPostById } from './postsSlice';
import { TimeAgo } from './TimeAgo';

const SinglePost = ({ match }) => {

  const { postId } = match.params;
  const post = useSelector(state => selectPostById(state, postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="single-post">
        <h2>{post.title}</h2>
        <div className="time-ago-wrapper"><TimeAgo timestamp={post.date_created} /></div>
        <img className="post-image" src={post.image_path} alt={post.image_name} />
        <p className="post-content">{post.content}</p>
        <button className="button">
          <Link to={`/editPost/${post.id}`}>
            Edit Post
          </Link>
        </button>
      </article>
    </section>
  );
}

export default SinglePost;