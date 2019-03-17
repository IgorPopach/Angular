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
    const respArr = [];
    const TransformResponse = Object.keys(response).map((key) => {
        response[key].key = key;
        respArr.push(response[key]);
        return respArr;
      });
    this.dbPosts = TransformResponse[0];
    console.log('this.dbPosts', this.dbPosts);
  }

  deletePost(key) {
    console.log('key', typeof(key));
    this.dbManagerService.deleteData(key)
      .subscribe(() => (alert(`Post with key: ${key} deleted!`)));
  }

  ngOnInit() {
    this.getPosts();
    setInterval(() => {
      return this.dbManagerService.getData()
      .subscribe(this.Response);
    }, 1000);
  }

}
