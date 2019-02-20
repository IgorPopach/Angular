import { Component } from '@angular/core';


@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent {
  store = window.localStorage;
  PostArray = JSON.parse(this.store.getItem('postArray'));
  // PostArray = [{ id: 12345, title: 'test', post: 'test post', author: 'test author' }];
  reversPostArray: any[] = [];
  displayPostArray = (PostArray) => {
    this.reversPostArray = [...PostArray].reverse();
  }
  updateList = (FullPost: { id: number, title: string, post: string, author: string }) => {
    if(this.PostArray === null) {
      this.PostArray = [];
    }
    this.PostArray.push(FullPost);
    this.store.setItem('postArray',JSON.stringify(this.PostArray));
    this.reversPostArray = [...this.PostArray].reverse();
  }

  // DeleteItem = (item) => {
  //   const FilterArr = this.PostArray.filter(e => {
  //     return e.id !== item.id;
  //   });
  //   console.log('FilterArr', FilterArr, 'this.PostArray', this.PostArray)
  //   this.PostArray = FilterArr;
  //   this.reversPostArray = [...this.PostArray].reverse();
  // }
  takeCheckedPost = (event) => {
    console.log('event', event);
  }

  DeletePost = () => {
    const checkboxArr: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkForDelete');
    const checkedArr = [];
    for (let i = 0; i < checkboxArr.length; i++) {
      const checkboxElem = checkboxArr[i];
      console.log('checkboxElem',checkboxElem)
      if (checkboxElem.checked === true) {
        checkedArr.push(+checkboxElem.value);
      }
    }
    console.log('checkedArr',checkedArr);
    for (let i = 0; i < checkedArr.length; i++) {
      const filteredPostArray = this.PostArray.filter(post => {
        return post.id !== checkedArr[i]
      });
      this.PostArray = filteredPostArray;
      console.log('this.PostArray',this.PostArray)
    }
    this.store.setItem('postArray',JSON.stringify(this.PostArray));
    this.reversPostArray = [...this.PostArray].reverse();
  }
}
