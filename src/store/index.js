import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// import customizationSlice from './features/customizationCreateSlice';
// import articlesSlice from '@/store/features/slices/articles/articlesSlice';
// import blogSlice, { blogSlice1, reducer } from '@/store/features/slices/blog/blogSlice';
// import { topicsSlice } from '@/store/features/slices/topics/topicsSlice';


import counterReducer from './counterSlice';

const loggerMiddleware = (store) => {
    console.log('loggerMiddleware:', store);
    return (next) => {
        console.log('loggerMiddleware:', 'action');
        return (action) => {
            console.log('loggerMiddleware:', action);
            return next(action);
        };
    };
};

const fetchApiMiddlewareLogger = (store) => {
    return (next) => {
        return (action) => {
            console.log('fetchApiMiddlewareLogger:', store.getState());
            return next(action);
        };
    };
};


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([loggerMiddleware, fetchApiMiddlewareLogger]),
    reducer: {
        // articles: articlesSlice.reducer,
        // blog: blogSlice.reducer,
        // customization: customizationSlice,
        // topics: topicsSlice.reducer,
        // categoryReducer,
        counter: counterReducer,
    }
});

function ReduxStoreWrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
}

export default ReduxStoreWrapper;
