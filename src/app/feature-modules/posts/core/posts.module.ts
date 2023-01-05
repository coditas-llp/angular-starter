import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddPostComponent } from '../components/add-post/add-post.component';
import { EditPostComponent } from '../components/edit-post/edit-post.component';
import { PostsListComponent } from '../components/posts-list/posts-list.component';
import { PostsComponent } from '../container/posts/posts.component';
import { PostsRoutingModule } from '../core/posts-routing.module';
import { PostsEffects } from '../state/posts.effects';
import { postsReducer } from '../state/posts.reducer';
import { POST_STATE_NAME } from '../state/posts.selector';
import {SharedModule} from '../../../shared/shared.module'

@NgModule({
  declarations: [PostsListComponent, AddPostComponent, EditPostComponent, PostsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    SharedModule,
    StoreModule.forFeature(POST_STATE_NAME, postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
})
export class PostsModule {}
