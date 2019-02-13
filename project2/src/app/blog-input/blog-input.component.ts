import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blog-input',
  templateUrl: './blog-input.component.html',
  styleUrls: ['./blog-input.component.css']
})
export class BlogInputComponent {
  Title = '';
  Post = '';
  Author = '';
  @Output() PostArray = new EventEmitter();
  Arr = [{id: 12654654, title: 'test', post: 'test post', author: 'test author'}];
  Add = () => {
    console.log('click');
    const obj = {
      id: Date.now(),
      title: this.Title,
      post: this.Post,
      author: this.Author,
    };
    this.Arr.push(obj);
    this.PostArray.emit(this.Arr);
    this.Title = '';
    this.Post = '';
    this.Author = '';
  }

}
