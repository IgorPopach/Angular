import { Component } from '@angular/core';


@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent {
  PostArray = [{ id: 12345, title: 'test', post: 'test post', author: 'test author'}];
  reversPostArray: any[] = [];
  displayPostArray = (PostArray) => {
    this.reversPostArray = [...PostArray].reverse();
  }
  updateList = (FullPost: {id: number, title: string, post: string, author: string}) => {
    this.PostArray.push(FullPost);
    this.reversPostArray = [...this.PostArray].reverse();
  }
}
