import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';
import { unwrapResult, nanoid } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import categoryOptions from '../../helpers/categoryOptions';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '../../validation-schemas/post-form-schema';

const AddPostForm = () => {
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = e => setTitle(e.target.value);
  const onCategoryChanged = e => setCategory(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  
  const dispatch = useDispatch();
  const history = useHistory();

  const categoriesOptions = categoryOptions();
  const canSave = [title, category, content].every(Boolean);

  const onSubmit = () => {
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

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema)
  });
  
  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="post_title"
            name="postTitle"
            placeholder="What's on your mind?"
            value={title}
            onChange={onTitleChanged}
            ref={register}
          />
          <span className="error-message">{errors.postTitle?.message}</span>
        </div>
        <div className="row">
          <label htmlFor="category">Category:</label>
          <select 
            id="category"　
            name="category" 
            value={category} 
            onChange={onCategoryChanged} 
            ref={register}>
              <option></option>
              {categoriesOptions}
          </select>
          <span className="error-message">{errors.category?.message}</span>
        </div>
        <div className="row">
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            rows="10"
            onChange={onContentChanged}
            ref={register}
          />
          <span className="error-message">{errors.postContent?.message}</span>
        </div>
        <input className="button" type="submit" value="Save Post" />
      </form>
    </section>
  );
};

export default AddPostForm;