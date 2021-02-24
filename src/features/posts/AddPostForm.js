import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';
import { unwrapResult, nanoid } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import categoryOptions from '../../helpers/categoryOptions';

const AddPostForm = () => {
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onCategoryChanged = e => setCategory(e.target.value);
  
  const dispatch = useDispatch();
  const canSave = [title, category, content].every(Boolean);
  const history = useHistory();

  const onSavePostClicked = () => {
    if (canSave) {
      try { 
        const post_id = nanoid();
        const resultAction = dispatch(postAdded(post_id, title, category, content ));
        unwrapResult(resultAction)
        setTitle('');
        setContent('');
        history.push(`/posts/${post_id}`);
      } catch (err) {
        console.error('Failed to save the post: ', err);
      }
    }
  }

  const categoriesOptions = categoryOptions();
  
  return (
    <section>
      <h2>Add a New Post</h2>
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
            id="postContent"
            name="postContent"
            value={content}
            rows="10"
            onChange={onContentChanged}
          />
        </div>
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;