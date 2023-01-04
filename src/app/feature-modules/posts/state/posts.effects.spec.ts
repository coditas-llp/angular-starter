import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { PostsService } from './../services/posts.service';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPosts,
  loadPostsSuccess,
  updatePost,
  updatePostSuccess,
} from './posts.actions';
import { PostsEffects } from './posts.effects';
import { generatePosts, Post } from './posts.model';
describe('PostsEffects', () => {
  let actions: Observable<Action>;
  let effects: PostsEffects;
  let postSevice: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PostsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
        {
          provide: PostsService,
          useValue: {},
        },
      ],
    });
    effects = TestBed.inject(PostsEffects);
    postSevice = TestBed.inject(PostsService);
  });

  describe('loadPosts', () => {
    it('should return loadPostSuccess', () => {
      const posts = generatePosts();
      const action = loadPosts();
      const outcome = loadPostsSuccess({ posts: posts });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: posts });
      const expected = cold('--b', { b: outcome });
      postSevice.getPosts = jest.fn(() => response);
      expect(effects.loadPosts$).toBeObservable(expected);
    });
  });
  describe('addPost', () => {
    it('should return addPostSuccess', () => {
      const posts = generatePosts(1);
      const action = addPost({ post: posts[0] });
      const outcome = addPostSuccess({ post: posts[0] });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: { name: '1' } });
      const expected = cold('--b', { b: outcome });
      postSevice.addPost = jest.fn(() => response);
      expect(effects.addPost$).toBeObservable(expected);
    });
  });

  describe('updatePost', () => {
    it('should return updatePostSuccess', () => {
      const posts = generatePosts(1);
      const action = updatePost({ post: posts[0] });
      const updatedPost: Update<Post> = {
        id: posts[0].id,
        changes: {
          ...posts[0],
        },
      };
      const outcome = updatePostSuccess({ post: updatedPost });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: posts[0] });
      const expected = cold('--b', { b: outcome });
      postSevice.updatePost = jest.fn(() => response);
      expect(effects.updatePost$).toBeObservable(expected);
    });
  });
  describe('deletePost', () => {
    it('should return deletePostSuccess', () => {
      const posts = generatePosts(1);
      const action = deletePost({ id: posts[0].id });
      const outcome = deletePostSuccess({ id: posts[0].id });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: { map: jest.fn(() => posts[0]) } });
      const expected = cold('--b', { b: outcome });
      postSevice.deletePost = jest.fn(() => response);
      expect(effects.deletePost$).toBeObservable(expected);
    });
  });
});
