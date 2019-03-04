import { Component, OnInit } from '@angular/core';

import { Post } from './../post';
import { PostService } from './../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Post;
  inputTitle = '';
  inputPost = '';
  constructor(public postService: PostService) { }

  ngOnInit() {
  }
  addPost(): void {
    this.post = {
      id: Date.now(),
      date: new Date,
      title: this.inputTitle,
      post: this.inputPost
    };
    this.postService.addPosts(this.post);
    console.log('addPost', this.post);
  }

}
