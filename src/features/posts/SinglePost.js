import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPostById } from './postsSlice'

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
      <article className="post">
        <h2>{post.title}</h2>
        <img className="post-image" src={post.image_path} alt={post.image_name} />
        <p className="post-content">{post.content}</p>
        <button>
          <Link to={`/editPost/${post.id}`}>
            Edit Post
          </Link>
        </button>
      </article>
    </section>
  );
}

export default SinglePost;