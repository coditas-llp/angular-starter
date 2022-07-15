import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { generatePosts, Post } from '../state/posts.model';
import { updatePost } from './../state/posts.actions';
import { getPostById } from './../state/posts.selector';
import { PostsState } from './../state/posts.state';
import { EditPostComponent } from './edit-post.component';

describe('EditPostComponent', () => {
  let component: EditPostComponent;
  let fixture: ComponentFixture<EditPostComponent>;
  let mockStore: MockStore<PostsState>;
  let route;
  ActivatedRoute;
  let mockGetPostById: MemoizedSelector<object, Post, DefaultProjectorFn<Post>>;
  const postForm = {
    id: 1,
    title: 'title 1',
    description: 'describe Post',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPostComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [
        provideMockStore(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: jest.fn(),
              },
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockGetPostById = mockStore.overrideSelector(getPostById, {
      id: '1',
      title: 'title 1',
      description: 'describe Post',
    });
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Add post functionality', () => {
    let onSubmitSpy: jest.SpyInstance;
    let dispatchActionSPy: jest.SpyInstance;
    let selectSpy: jest.SpyInstance;
    let mockPost = generatePosts()[0];
    beforeEach(() => {
      onSubmitSpy = jest.spyOn(component, 'onSubmit');
      dispatchActionSPy = jest.spyOn(mockStore, 'dispatch');
      selectSpy = jest.spyOn(mockStore, 'select');
    });
    it('should check click on  update post', () => {
      const button = fixture.debugElement.query(By.css('#update-button'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(onSubmitSpy).toBeCalled();
    });
    it('should dispatch update post action', () => {
      component.postForm.patchValue(postForm);
      expect(component.postForm.valid).toBeTruthy();
      const post: Post = {
        id: '1',
        title: postForm.title,
        description: postForm.description,
      };
      const updatePostAction = updatePost({
        post,
      });
      fixture.detectChanges();

      component.onSubmit();

      expect(dispatchActionSPy).toHaveBeenCalledWith(updatePostAction);
    });
  });
});
