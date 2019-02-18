import { Component, OnInit, Input, DoCheck, OnChanges, SimpleChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-block-item',
  templateUrl: './block-item.component.html',
  styleUrls: ['./block-item.component.css']
})
export class BlockItemComponent implements OnInit, DoCheck, OnChanges, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() post: [{ title: string, post: string, author: string }];
  constructor() {
    console.log('constructor');
  }

  DeleteItem = () => {
    this.post = [null];
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges==>', changes);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit==>');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit==>');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngAfterViewChecked');
  }

}
