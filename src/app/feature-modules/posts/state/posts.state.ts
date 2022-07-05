import { Post } from './posts.model';

export interface PostsState {
  posts: Post[] | null;
}

export const initialState: PostsState = {
  posts: null,
};
