import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PostsState } from '../state/posts.state';
import { addPost } from './../state/posts.actions';
import { generatePosts, Post } from './../state/posts.model';
import { AddPostComponent } from './add-post.component';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;
  let mockStore: MockStore<PostsState>;
  const postForm = {
    title: 'title 1',
    description: 'describe Post',
  };
  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPostComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Add post functionality', () => {
    let onAddPostSpy: jest.SpyInstance;
    let dispatchActionSPy: jest.SpyInstance;
    let mockPost = generatePosts()[0];
    beforeEach(() => {
      onAddPostSpy = jest.spyOn(component, 'onAddPost');
      dispatchActionSPy = jest.spyOn(mockStore, 'dispatch');
    });
    it('should check click on  add post', () => {
      const button = fixture.debugElement.query(By.css('#add-button'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(onAddPostSpy).toBeCalled();
    });
    it('should dispatch add post action', () => {
      component.postForm.patchValue(postForm);
      expect(component.postForm.valid).toBeTruthy();
      const post: Post = {
        title: postForm.title,
        description: postForm.description,
      };
      const addPostAction = addPost({
        post,
      });
      fixture.detectChanges();

      component.onAddPost();

      expect(dispatchActionSPy).toHaveBeenCalledWith(addPostAction);
    });
  });
});
