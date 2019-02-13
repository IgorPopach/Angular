import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  title = '';
  post = '';
  author = '';
  @Output() OnAddPost = new EventEmitter <{id: number, title: string, post: string, author: string}>();
  AddPost = () => {
    this.OnAddPost.emit({id: Date.now(), title: this.title, post: this.post, author: this.author});
    this.title = '';
    this.post = '';
    this.author = '';
  }
}
