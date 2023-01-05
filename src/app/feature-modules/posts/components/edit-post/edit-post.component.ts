import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../../state/posts.model';
import { setSelectedId, updatePost } from '../../state/posts.actions';
import { getPostById } from '../../state/posts.selector';

@Component({
  selector: 'cdts-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  @Input()
  post: Post;
  postForm: FormGroup;

  postFormValues: any;
  postSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) this.store.dispatch(setSelectedId({ id: id }));
    // this.postSubscription = this.store.select(getPostById).subscribe(data => {
    //   if (data) {
    //     this.post = data;
    //     this.createForm();
    //   }
    // });

    this.createFormValues();
  }

  createFormValues() {
    // this.postForm = new FormGroup({
    //   title: new FormControl(this.post.title, [
    //     Validators.required,
    //     Validators.minLength(6),
    //   ]),
    //   description: new FormControl(this.post.description, [
    //     Validators.required,
    //     Validators.minLength(10),
    //   ]),
    // });

    this.postFormValues = {title: this.post.title, description: this.post.description}
  }

  // onSubmit() {
  //   if (!this.postForm.valid) {
  //     return;
  //   }

  //   const title = this.postForm.value.title;
  //   const description = this.postForm.value.description;

  //   const post: Post = {
  //     id: this.post.id,
  //     title,
  //     description,
  //   };

  //   //dispatch the action
  //   this.store.dispatch(updatePost({ post }));
  //   // this.router.navigate(['posts']);
  // }

  onSubmitClick(postFormGroup){
    let postForm: FormGroup = postFormGroup.formGroup;
    if (!postForm.valid) {
      return;
    }
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
