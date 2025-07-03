import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HttpService } from '@/service/http/HttpService';
import { info } from '@/service/helpers/resources';
import { ServerEndpoints, SERVER_URL } from '@/service/http/serverEndpoint';

function logInfo(info, mesaage) {
    
    if(ENV.APP_ENV !== 'production')
        console.log('blogSlice:', mesaage, info);
}

const clientInformation = {
    data: '',
    geographicLocation: {},
    timeStamp: '',
    info: info
};

const url = ENV.APP_ENV == 'production' ? 
`${SERVER_URL.remote_url}/${ServerEndpoints.BLOG_API }` :
`${SERVER_URL.local_url}:3000/${ServerEndpoints.BLOG_API}`


const axios_request_config = {
    method: 'GET',
    url: url,
    params: {
        requestId: '',
        // _limit: 100,
        blog_title: 'blog_name'
        // article_id: article_id,
        // title: 'subcategory_name',
        // subcategory_id: queryString[0].subcategory_id
    },
    headers: {
        Authorization: 'Bearer my getBlogAsyncThunk',
        'Content-Type': 'application/json',
        'Accept-Language': '*',
        'My-Custom-Header': 'getBlogAsyncThunk',
        "Access-Control-Allow-Origin": "*",
        // withCredentials: true,
        // credentials: 'same-origin',
    },
    data: [clientInformation],
    responseEncoding: 'utf8'
};

export const getBlogAsyncThunk = createAsyncThunk('blog/getBlogAsyncThunk', async (blogId, thunkAPI) => {
    const { dispatch, extra, fulfillWithValue, getState, rejectWithValue } = thunkAPI;

    try {

        const HttpServiceInstance = new HttpService('', 'GET', axios_request_config);
        const { data, headers } = await HttpServiceInstance.get('', 'GET', axios_request_config);

        return data;
    } catch (error) {
        return rejectWithValue(error.response);
    }
});

// Define the initial state using that type
const initialState = () => ({
    blog: [],
    status: 'idle',
    errors: [],
    message: '',
    isLoading: false,
    // status: undefined,
    statusLoading: 'idle', // 'loading'/pending, 'succeeded'/(fulfilled), failed / 'Rejected'
    statusMessage: null,
    statusCode: undefined
});


export const blogSlice = createSlice({
    name: 'blog',
    initialState: initialState,
    reducers: {
        blogStoreReseted: (state) => initialState(),
        disableBlogLoading: (state, action) => {
            state.isLoading = false;
            
            logInfo(action, 'disableBlogLoading:')
        },
        enableBlogLoading: (state, action) => {
            logInfo(action, 'enableBlogLoading');
            state.isLoading = true;
        },
        updateBlog: (state, action) => {
            state.status = 'succeeded'
            const { name } = action.payload;
            logInfo(name, 'updateBlog:');
            return name;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBlogAsyncThunk.pending, (state) => {
                state.status = 'loading';
                logInfo(state, 'getBlogAsyncThunk.pending:');
            })
            .addCase(getBlogAsyncThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blog = action.payload;
                logInfo(state.blog, 'getBlogAsyncThunk.fulfilled:');
            })
            .addCase(getBlogAsyncThunk.rejected, (state) => {
                state.status = 'failed';

                logInfo(state, 'getBlogAsyncThunk.rejected:');
            });
    },
});

export const {
    actions: { blogStoreReseted, disableBlogLoading, enableBlogLoading, updateBlog }
} = blogSlice;

export const { actions, reducer } = blogSlice;

// Access to configureStore Reducer types is one of these features:
export const selectAllBlog = (state) => state.blog;

// OR reducer
export default blogSlice;;
