import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-item',
  templateUrl: './block-item.component.html',
  styleUrls: ['./block-item.component.css']
})
export class BlockItemComponent implements OnInit {
  @Input()post: [{title: string, post: string, author: string}];
  constructor() { }

  ngOnInit() {
  }

}
