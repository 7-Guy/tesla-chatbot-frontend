import {configureStore} from "@reduxjs/toolkit";
import {modelSlice} from "./features/models/model";
import {discussionSlice} from "./features/discussions/discussion";

const store = configureStore({
    reducer: {
        model: modelSlice.reducer,
        discussion: discussionSlice.reducer
    }
})

export const modelActions = modelSlice.actions;
export const discussionActions = discussionSlice.actions;
export default store;

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store