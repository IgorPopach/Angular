import { Component } from '@angular/core';


@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent {
  PostArray = [{ id: 12345, title: 'test', post: 'test post', author: 'test author' }];
  reversPostArray: any[] = [];
  displayPostArray = (PostArray) => {
    this.reversPostArray = [...PostArray].reverse();
  }
  updateList = (FullPost: { id: number, title: string, post: string, author: string }) => {
    this.PostArray.push(FullPost);
    this.reversPostArray = [...this.PostArray].reverse();
  }

  DeleteItem = (item) => {
    console.log('item', item);
    console.log('PostArray==>1', this.PostArray);
    const FilterArr = this.PostArray.filter(e => {
      return e.id !== item.id;
    });
    this.PostArray = FilterArr;
    this.reversPostArray = [...this.PostArray].reverse();
    console.log('PostArray==>2', this.PostArray);
  }
}
