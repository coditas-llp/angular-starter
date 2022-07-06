import { createReducer, on } from '@ngrx/store';
import {
  addPostSuccess,
  deletePostSuccess,
  loadPostsSuccess,
  setSelectedId,
  updatePostSuccess
} from './posts.actions';
import { initialState, postsAdapter, PostsState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    return postsAdapter.addOne(action.post, {
      ...state,
    });
  }),
  on(updatePostSuccess, (state, action) => {
    return postsAdapter.updateOne(action.post, state);
  }),
  on(deletePostSuccess, (state, { id }) => {
    return postsAdapter.removeOne(id, state);
  }),
  on(loadPostsSuccess, (state, action) => {
    return postsAdapter.setAll(action.posts, {
      ...state,
    });
  }),
  on(setSelectedId, (state: PostsState, action) => {
    return { ...state, selectedId: action.id };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
