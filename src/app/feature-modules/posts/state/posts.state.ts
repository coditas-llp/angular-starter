import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Post } from './posts.model';

export interface PostsState extends EntityState<Post> {
  selectedId: string;
}

export const postsAdapter = createEntityAdapter<Post>();
export const initialState: PostsState = postsAdapter.getInitialState({
  selectedId: '0',
});
