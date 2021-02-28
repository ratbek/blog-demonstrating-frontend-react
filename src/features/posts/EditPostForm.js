import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postUpdated, selectPostById } from './postsSlice';
import categoryOptions from '../../helpers/categoryOptions';
import validationSchema from '../../validation-schemas/post-form-schema';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const EditPostForm = ({ match }) => {
  const { postId } = match.params;
  const post = useSelector(state => selectPostById(state, postId));

  const [title, setTitle] = useState(post.title);
  const [category, setCategory] = useState(post.category);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChanged = e => setTitle(e.target.value);
  const onCategoryChanged = e => setCategory(e.target.value);
  const onContentChanged = e => setContent(e.target.value);

  const categoriesOptions = categoryOptions();
  const canSave = [title, category, content].every(Boolean);

  const onSubmit = (e) => {
    if (canSave) {
      dispatch(postUpdated({ id: postId, title, category, content }));
      history.push(`/posts/${postId}`);
    } 
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema)
  });

  return (
    <section className="edit-post-form">
      <h2>Edit Post</h2>
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
            id="post_content"
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

export default EditPostForm;