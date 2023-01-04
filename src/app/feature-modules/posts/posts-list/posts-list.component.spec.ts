import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { deletePost } from '../state/posts.actions';
import { generatePosts } from '../state/posts.model';
import { PostsState } from '../state/posts.state';
import { PostsListComponent } from './posts-list.component';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let mockStore: MockStore<PostsState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsListComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
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
      fixture = TestBed.createComponent(PostsListComponent);
      component = fixture.componentInstance;
      mockStore = TestBed.inject(MockStore);
      fixture.detectChanges();
      console.log(fixture, '>>>>');
      onDeletePost = jest.spyOn(component, 'onDeletePost');
      dispatchActionSPy = jest.spyOn(mockStore, 'dispatch');
      onConfirm = jest.spyOn(window, 'confirm').mockReturnValue(true);
    });
    it('should delete on click of delete button', () => {
      component.posts = of(mockPosts);
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css('#delete-icon'));
      button.nativeElement.click();
      expect(onDeletePost).toHaveBeenCalledTimes(1);
    });
    it('should dispatch delete post action', () => {
      const deletePostAction = deletePost({
        id: '1',
      });
      fixture.detectChanges();
      component.onDeletePost('1');
      expect(onDeletePost).toHaveBeenCalledTimes(1);
      expect(dispatchActionSPy).toHaveBeenCalledWith(deletePostAction);
    });
  });
});
