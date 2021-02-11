import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const entities = {
  1: { 
    id: '1', 
    title: 'First Post!',
    category: 'Motivation',
    image_name: 'image-1',
    image_path: '/images/post_images/image-1.jpg',
    content: 'Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula nisi nec metus pulvinar, nec faucibus risus lacinia. Donec sed velit risus. Proin nec magna posuere, tristique est tempor, porttitor purus. Proin bibendum non massa et pretium. Pellentesque id tristique arcu, vel vehicula augue. Duis sodales, sem sed ultricies ultrices, purus enim pellentesque neque, lacinia suscipit massa sem eget dolor. In malesuada libero ex, et volutpat ligula fringilla porttitor. Etiam egestas, lacus vestibulum convallis elementum, nisl erat imperdiet eros, eu efficitur lorem neque sed tellus.'
  },
  2: { 
    id: '2', 
    title: 'Second Post',
    category: 'Travel',
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
  reducers: {}
})

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts)

export default postsSlice.reducer