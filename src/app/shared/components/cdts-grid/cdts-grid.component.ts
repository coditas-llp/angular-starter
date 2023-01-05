import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/feature-modules/posts/state/posts.model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'cdts-grid',
  templateUrl: './cdts-grid.component.html',
  styleUrls: ['./cdts-grid.component.scss']
})
export class CdtsGridComponent implements OnInit {

  @Input('gridData') posts: Post[] = [];
  @Output() selectedPostEmiiter = new EventEmitter<{ postId: string, action: string }>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onDeletePost(id: string) {
    this.selectedPostEmiiter.emit({ postId: id, action: 'delete' });
  }

  onUpdatePost(id: string) {
    this.selectedPostEmiiter.emit({ postId: id, action: 'update' });
  }

}
