import { Component, OnInit } from '@angular/core';

import { PostService } from './../post.service';
import { DbManagerService } from './../db-manager.service';
import { Post } from './../post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  dbPosts: Post[];

  constructor(private PostService: PostService, private dbManagerService: DbManagerService) {}

  getPosts(): void {
    this.posts = this.PostService.getPosts();
  }

  Response = response => {
    console.log('response', response);
    this.dbPosts = response.TransformResponse;
    console.log('this.dbPosts', this.dbPosts);
  }

  ngOnInit() {
    this.getPosts();
    setInterval(() => {
      return this.dbManagerService.getData()
      .subscribe(this.Response);
    }, 1000);
  }

}
