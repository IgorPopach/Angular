import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from './../post';
import { PostService } from './../post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private PostService: PostService
  ) {}
  ngOnInit() {
    this.getPost();
    console.log('ok');
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PostService.getPost(id)
      .subscribe(post => this.post = post)
  }

  goBack(): void {
    this.location.back();
  }

}
