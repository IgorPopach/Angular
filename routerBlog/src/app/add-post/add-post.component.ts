import { Component, OnInit } from '@angular/core';

import { Post } from './../post';
import { PostService } from './../post.service';
import { DbManagerService } from './../db-manager.service';

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
  Response = response => {
    const postData = response.response;
    const dataKey = response.responseKeys;
    console.log('postData', postData);
    console.log('dataKey', typeof(dataKey));
  }
  ngOnInit() {
    this.dbManagerService.getData()
      .subscribe(this.Response);
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
    const data = [];
    data.push(this.post);
    console.log('data', data);
    this.dbManagerService.saveData(data)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
