import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const entities = {
  1: { 
    id: '1', 
    title: 'First Post!',
    date_created: '2021-02-14T20:32:00',
    category: "travel",
    image_name: 'image-1',
    image_path: '/images/post_images/image-1.jpg',
    content: 'Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula nisi nec metus pulvinar, nec faucibus risus lacinia. Donec sed velit risus. Proin nec magna posuere, tristique est tempor, porttitor purus. Proin bibendum non massa et pretium. Pellentesque id tristique arcu, vel vehicula augue. Duis sodales, sem sed ultricies ultrices, purus enim pellentesque neque, lacinia suscipit massa sem eget dolor. In malesuada libero ex, et volutpat ligula fringilla porttitor. Etiam egestas, lacus vestibulum convallis elementum, nisl erat imperdiet eros, eu efficitur lorem neque sed tellus.'
  },
  2: { 
    id: '2', 
    title: 'Second Post',
    date_created: '2021-02-14T21:33:00',
    category: "motivation",
    image_name: 'image-2',
    image_path: '/images/post_images/image-2.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula nisi nec metus pulvinar, nec faucibus risus lacinia. Donec sed velit risus. Proin nec magna posuere, tristique est tempor, porttitor purus. Proin bibendum non massa et pretium. Pellentesque id tristique arcu, vel vehicula augue. Duis sodales, sem sed ultricies ultrices, purus enim pellentesque neque, lacinia suscipit massa sem eget dolor. In malesuada libero ex, et volutpat ligula fringilla porttitor. Etiam egestas, lacus vestibulum convallis elementum, nisl erat imperdiet eros, eu efficitur lorem neque sed tellus.' 
  }
}

const postsAdapter = createEntityAdapter()

const initialState = postsAdapter.getInitialState({
  ids: [1, 2],
  entities: entities,
  status: 'idle',
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postUpdated(state, action) {
      const { id, title, category, content } = action.payload
      const existingPost = state.entities[id]
      if (existingPost) {
        existingPost.title = title;
        existingPost.category = category;
        existingPost.content = content;
      }
    },
    postAdded: {
      reducer(state, action) {
        const { id, title, category, date_created, content } = action.payload;
        state.entities[id] = {id, title, category, date_created, content};
        state.ids.push(id);
      },
      prepare(id, title, category, content) {
        return {
          payload: {
            id,
            date_created: new Date().toISOString(),
            title,
            category,
            content,
          }
        }
      }
    },
  }
});

export const { postUpdated, postAdded } = postsSlice.actions;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts)

export default postsSlice.reducer