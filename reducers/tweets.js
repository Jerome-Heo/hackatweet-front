import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [/*{ 
      authorName: null, 
      authorUsername: null,
      content: null,
      likedBy: [null],
  }*/],
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    addATweet: (state, action) => {
      state.value.push(action.payload);
      console.log(state.value);
    },
    getAllTweets: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
  },
});

export const { addATweet, getAllTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
