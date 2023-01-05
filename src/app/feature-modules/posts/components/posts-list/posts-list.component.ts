import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { deletePost, setSelectedId } from '../../state/posts.actions';
import { Post } from '../../state/posts.model';
import { getPostById } from '../../state/posts.selector';

@Component({
  selector: 'cdts-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  @Input() posts: Post[] = [];
  displayUpdatForm: boolean;
  displayAddForm: boolean;
  postSubscription: any;
  editPostData: Post;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  onSelectPostData(event: any) {
    if (event.action === 'delete') {
      if (confirm('Are you sure you want to delete')) {
        const id = event.postId;
        this.store.dispatch(deletePost({ id }));
      }
    } else if (event.action === 'update') {
      if (event.postId) this.store.dispatch(setSelectedId({ id: event.postId }));
      this.postSubscription = this.store.select(getPostById).subscribe(data => {
        if (data) {
          this.editPostData = data
        }
      });
    }
  }
}
