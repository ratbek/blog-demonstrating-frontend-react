import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postUpdated, selectPostById } from './postsSlice';
import FormErrorMessage from '../../helpers/FormErrorMessage';
import categoryOptions from '../../helpers/categoryOptions';

const EditPostForm = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector(state => selectPostById(state, postId));

  const [title, setTitle] = useState(post.title);
  const [category, setCategory] = useState(post.category);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const canSave = [title, category, content].every(Boolean);
  const history = useHistory();

  const onTitleChanged = e => {
    setTitle(e.target.value);
    let postTitle = document.getElementById('post_title');
    FormErrorMessage.hideErrorMessageFor(postTitle, '#dedede');
  };

  const onCategoryChanged = e => {
    setCategory(e.target.value);
  };

  const onContentChanged = e => {
    setContent(e.target.value);
    let postContent = document.getElementById('post_content');
    FormErrorMessage.hideErrorMessageFor(postContent, '#dedede');
  }

  const onSavePostClicked = (e) => {
    if (canSave) {
      dispatch(postUpdated({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    } 
    else {
      if (!title) {
        let postTitle = document.getElementById('post_title');
        FormErrorMessage.displayErrorMessageFor(postTitle, 'red');
      }
      if (!content) {
        let postContent = document.getElementById('post_content');
        FormErrorMessage.displayErrorMessageFor(postContent, 'red');
      }
    }
  };

  const categoriesOptions = categoryOptions();

  return (
    <section className="edit-post-form">
      <h2>Edit Post</h2>
      <form>
        <div className="row">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="post_title"
            name="postTitle"
            placeholder="What's on your mind?"
            value={title}
            onChange={onTitleChanged}
          />
          <span className="error-message">Post Title should not be empty</span>
        </div>
        <div className="row">
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={onCategoryChanged}>
            <option></option>
            {categoriesOptions}
          </select>
        </div>
        <div className="row">
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="post_content"
            name="postContent"
            value={content}
            rows="10"
            onChange={onContentChanged}
          />
          <span className="error-message">Content should not be empty</span>
        </div>
      </form>
      <button onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
};

export default EditPostForm;