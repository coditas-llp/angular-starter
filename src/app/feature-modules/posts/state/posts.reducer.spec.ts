import { Dictionary, Update } from '@ngrx/entity';
import {
    addPostSuccess,
    deletePostSuccess,
    loadPostsSuccess,
    setSelectedId,
    updatePostSuccess
} from './posts.actions';
import { generatePosts, Post } from './posts.model';
import { postsReducer } from './posts.reducer';
import { PostsState } from './posts.state';

describe('Posts Reducer', () => {
    let filledState: PostsState;
    let emptyState: PostsState;
    let posts: Post[];

    beforeEach(() => {
        posts = generatePosts(50);
        const entityMap: Dictionary<Post> = {};
        posts.forEach(post => (entityMap[post.id] = post));

        filledState = {
            ids: posts.map(p => p.id),
            entities: entityMap,
            selectedId: 0,
        };

        emptyState = {
            ids: [],
            entities: {},
            selectedId: 0,
        };
    });

    describe('Laoding all posts', () => {
        it('should add all posts to empty state', () => {
            const posts = generatePosts(50);
            const action = loadPostsSuccess({
                posts,
            });
            const result = postsReducer(emptyState, action);
            expect(result).toEqual({
                ...filledState,
            });
        });
        it('should add all posts to filled state', () => {
            const posts = generatePosts(10, 50);
            const action = loadPostsSuccess({
                posts,
            });
            const result = postsReducer(filledState, action);
            const expectedEntityMap = { ...filledState.entities };
            posts.forEach(p => (expectedEntityMap[p.id] = p));
            const expectedState: PostsState = {
                ...filledState,
                entities: expectedEntityMap,
                ids: new Array(60).fill(0).map((r, i) => `${i + 1}`),
            };
            expect(result).toEqual(expectedState);
        });
        it('should add post to input state', () => {
            const post = generatePosts(51)[0]; // create 10 posts from id 51 -> 60
            const action = addPostSuccess({ post });
            //Act
            const emptyStateResult = postsReducer(emptyState, action);
            const filledStateResult = postsReducer(filledState, action);
            //empty state Assert
            const expectedEmptyState: PostsState = {
                ...emptyState,
                entities: {
                    [post.id]: post,
                },
                ids: [post.id],
            };
            const expectedFilledState: PostsState = {
                ...filledState,
                entities: {
                    ...filledState.entities,
                    [post.id]: post,
                },
            };
            expect(filledStateResult).toEqual(expectedFilledState);
            expect(emptyStateResult).toEqual(expectedEmptyState);
        });

        it('should update existing post', () => {
            const post = generatePosts(1)[0];
            const updatePost: Update<Post> = {
                id: 1,
                changes: { ...post },
            };
            const action = updatePostSuccess({ post: updatePost });
            const result = postsReducer(filledState, action);
            const expectedState: PostsState = {
                ...filledState,
                entities: {
                    ...filledState.entities,
                    1: post,
                },
            };
            expect(result).toEqual(expectedState);
        });

        it('should delete existing post', () => {
            const postToDelete = '30';
            const action = deletePostSuccess({ id: postToDelete });
            const result = postsReducer(filledState, action);
            expect(result.entities[30]).toBeUndefined();
            expect(result.ids).not.toContain(30);
            expect(result.ids.length).toBe(posts.length - 1);
        });
        it('should set the selected post Id in state', () => {
            const action = setSelectedId({ id: 30 });
            const result = postsReducer(emptyState, action);
            expect(result).toEqual({
                ...emptyState,
                selectedId: 30,
            });
        });
    });
});
