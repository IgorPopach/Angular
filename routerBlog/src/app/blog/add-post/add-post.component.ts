import { Component, OnInit } from '@angular/core';

import { Post } from './../../post';
import { PostService } from './../../post.service';
import { DbManagerService } from './../../db-manager.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Post;
  inputTitle = '';
  inputPost = '';
  constructor(public postService: PostService, private dbManagerService: DbManagerService) { }
  ngOnInit() {
  }

  addPost(): void {
    this.post = {
      id: Date.now(),
      date: new Date(),
      title: this.inputTitle,
      post: this.inputPost
    };
    this.postService.addPosts(this.post);
    console.log('addPost', this.post);
  }

  addPostToDB(): void {
    this.post = {
      id: Date.now(),
      date: new Date(),
      title: this.inputTitle,
      post: this.inputPost
    };
    console.log('this.post', this.post);
    this.dbManagerService.saveData(this.post)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
