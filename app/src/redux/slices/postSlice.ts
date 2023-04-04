import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

type Post = {
    post: {
        id:number;
        advice:string;
    }
}

type PostState = {
    posts: Post[];
}



export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function () {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        return data
    }
)




const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'rejected'
        },
    },
})

export const {} = postSlice.actions;


export default postSlice.reducer