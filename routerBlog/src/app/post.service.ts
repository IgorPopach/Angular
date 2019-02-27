import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from './post';
import { Posts } from './mock-posts';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsStore: Post[] = Posts;
  constructor(private messageService: MessageService) { }

  getPosts(): Post[] {
    return this.postsStore
  }

  addPosts(post: Post): void {
    this.postsStore.push(post);
    this.messageService.add(`PostService: add post id=${post.id}`);
  }

  getPost(id: number): Observable<Post> {
    this.messageService.add(`PostService: fetched post id=${id}`);
    return of(this.postsStore.find(post => post.id === id));
  }
}
