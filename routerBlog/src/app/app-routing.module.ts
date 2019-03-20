import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { RecourcesComponent } from './recources/recources.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogSinglePostComponent } from './blog-single-post/blog-single-post.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginPageReactComponent } from './login-page-react/login-page-react.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'docs', component: DocsComponent},
  {path: 'resources', component: RecourcesComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: BlogPostComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'login-reactive', component: LoginPageReactComponent},
  // {path: 'blog/:id/:title/:post', component: BlogSinglePostComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
