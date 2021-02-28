import * as yup from 'yup';

const schema = yup.object().shape({
  postTitle: yup.string().required('Post Title is required field'),
  category: yup.string().required('Category is required field'),
  postContent: yup.string().required('Content is required field'),
});

export default schema;