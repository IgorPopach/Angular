import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blog-input',
  templateUrl: './blog-input.component.html',
  styleUrls: ['./blog-input.component.css']
})
export class BlogInputComponent {
  @Output() PostArray = new EventEmitter();
  Arr = [{id: 12654654, title: 'test', post: 'test post', author: 'test author'}];
  Add = (modelTitle, modelPost, modelAuthor) => {
    console.log('click');
    const obj = {
      id: Date.now(),
      title: modelTitle,
      post: modelPost,
      author: modelAuthor,
    };
    this.Arr.push(obj);
    this.PostArray.emit(this.Arr);
  }

}
