/* eslint-disable prettier/prettier */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postsAdapter, PostsState } from './posts.state';
export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);
export const postsSelectors = postsAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);
export const getPostEntities = createSelector(
  getPostsState,
  postsSelectors.selectEntities
);

export const getSelectedId = createSelector(getPostsState, (state: PostsState) => state.selectedId)
export const getPostById = createSelector(
  getPostEntities,
  getSelectedId,
  (posts, id) => {
    console.log()
    return posts ? posts[id] : null;
  }
);