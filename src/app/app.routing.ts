import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard],children: [
      {
        path: '',
        component: PostsListComponent
      },
      {
          path: 'addpost',
          component: AddPostComponent
      }
  ] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
  