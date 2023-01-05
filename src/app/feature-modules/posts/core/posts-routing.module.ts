import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from '../components/add-post/add-post.component';
import { EditPostComponent } from '../components/edit-post/edit-post.component';
import { PostsListComponent } from '../components/posts-list/posts-list.component';
import { PostsComponent } from '../container/posts/posts.component'

// const routes: Routes = [
//   {
//     path: '',
//     component: PostsComponent,
//     children: [
//       { path: 'add', component: AddPostComponent },
//       {
//         path: 'edit/:id',
//         component: EditPostComponent,
//       },
//     ],
//   },
// ];
const postRoutes: Route[] = [
  { path: 'add', component: AddPostComponent },
  { path: 'edit/:id', component: EditPostComponent },
  { path: '**', component: PostsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(postRoutes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
