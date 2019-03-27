import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogSinglePostComponent } from './blog-single-post/blog-single-post.component';

const blogRoutes: Routes = [
  
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: BlogPostComponent},
  {path: 'blog/:id/:title/:post', component: BlogSinglePostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
