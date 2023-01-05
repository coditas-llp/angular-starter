import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../../state/posts.model';
import { addPost } from '../../state/posts.actions';

@Component({
  selector: 'cdts-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  onSubmitClick(postFormGroup) {
    let postForm: FormGroup = postFormGroup.formGroup
    if (!postForm.valid) {
      return;
    }

    const post: Post = {
      title: postForm.value.title,
      description: postForm.value.description,
    };

    this.store.dispatch(addPost({ post }));
  }
}
