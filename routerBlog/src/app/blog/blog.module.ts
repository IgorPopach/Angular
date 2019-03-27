import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';


import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogSinglePostComponent } from './blog-single-post/blog-single-post.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogPostComponent,
    BlogSinglePostComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ],
  providers: []
})
export class BlogModule { }
