import { Component, OnInit } from '@angular/core';

import { PostService } from './../post.service';
import { Post } from './../post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private PostService: PostService) {}

  getPosts(): void {
    this.posts = this.PostService.getPosts();
  }
  ngOnInit() {
    this.getPosts();
  }

}
