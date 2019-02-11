import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent implements OnInit {

  PostArray: [{id: any, title: string, post: string, author: string}] = [];
  constructor() { }

  Add = (modelTitle, modelPost, modelAuthor) => {
    const obj = {
      id: Date.now(),
      title: modelTitle,
      post: modelPost,
      author: modelAuthor,
    };
    this.PostArray.push(obj);
    this.PostArray.reverse();
  }

  ngOnInit() {
  }

}
