import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from './post';
import { Posts } from './mock-posts';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private messageService: MessageService) { }

  getPosts(): Post[] {
    return Posts
  }

  getPost(id: number): Observable<Post> {
    this.messageService.add(`PostService: fetched post id=${id}`);
    return of(Posts.find(post => post.id === id));
  }
}
