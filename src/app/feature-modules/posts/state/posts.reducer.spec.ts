import { generatePosts } from './posts.model';
import { PostsState } from './posts.state';

describe('Posts Reducer', () => {
    let filledState: PostsState;
    let emptyState;
    PostsState;
    let posts: Post[];

    beforeEach(() => {
        posts = generatePosts(50);
    });
});
