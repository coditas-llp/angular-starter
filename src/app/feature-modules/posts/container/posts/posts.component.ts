import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
// import { Post } from '../../interfaces/posts.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { deletePost, loadPosts, setSelectedId, updatePostSuccess } from '../../state/posts.actions';
import { Post } from '../../state/posts.model';
import { getPostById, getPosts } from '../../state/posts.selector';

@Component({
  selector: 'cdts-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Observable<Post[]>;
  postSubscription: any;
  displayUpdatForm: boolean = false;
  displayAddForm: boolean = true;
  editPostData: Post;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.posts = this.store.select(getPosts); 
    this.store.select(updatePostSuccess).subscribe(data => {
      if (data) {
        // this.displayUpdatForm = false;
        // this.displayAddForm = true;
      }
    }) 
  }


  onSelectPostData(event: any) {
    if (event.action === 'delete') {
      if (confirm('Are you sure you want to delete')) {
        const id = event.postId;
        this.store.dispatch(deletePost({ id }));
      }
    } else if(event.action === 'update') {
      this.displayUpdatForm = true;
      this.displayAddForm = false;
      if (event.postId) this.store.dispatch(setSelectedId({ id: event.postId }));
      this.postSubscription = this.store.select(getPostById).subscribe(data => {
        if (data) {
          this.editPostData = data
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
