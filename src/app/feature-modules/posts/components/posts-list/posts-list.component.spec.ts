import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { deletePost } from '../../state/posts.actions';
import { generatePosts } from '../../state/posts.model';
import { PostsState } from '../../state/posts.state';
import { PostsListComponent } from './posts-list.component';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let mockStore: MockStore<PostsState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsListComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore()],
    }).compileComponents(); 
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Add post functionality', () => {
    let onDeletePost: jest.SpyInstance;
    let dispatchActionSPy: jest.SpyInstance;
    let onConfirm: jest.SpyInstance;
    let mockPosts = generatePosts();

    beforeEach(() => {
      dispatchActionSPy = jest.spyOn(mockStore, 'dispatch');
      onConfirm = jest.spyOn(window, 'confirm').mockReturnValue(true);
    });
  });
});
