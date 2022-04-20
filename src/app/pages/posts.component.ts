import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-posts',
  template: `
    <h1>Posts</h1>

    <li *ngFor="let post of posts" [routerLink]="'/posts/' + post.id">
      {{post.title}}
    </li>

    <pre>{{posts | json }}</pre>
  `,
})
export class PostsComponent {
  posts: Post[];

  constructor(http: HttpClient) {
    http
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe((res) => (this.posts = res));
  }
}
