import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  posts: Post[] = [
    {title: 'Post number 1', text: 'This is my post number 1', id: 0},
    {title: 'Post number 2', text: 'This is my post number 2', id: 1},
    {title: 'Post number 3', text: 'This is my post number 3', id: 2},
    {title: 'Post number 4', text: 'This is my post number 4', id: 3},
    {title: 'Post number 5', text: 'This is my post number 5', id: 4},
    {title: 'Post number 6', text: 'This is my post number 6', id: 5},
  ];

  updatePosts(post: Post): void {
    post.id = this.posts.length > 0 ? this.posts.sort((a, b) => b.id - a.id)[0].id + 1 : 0;
    this.posts.unshift(post);
  }

  removePost(index: number): void {
    this.posts = this.posts.filter(e => e.id !== index);
  }

  getPostById(id: number): Post {
    return this.posts.find(p => p.id === id);
  }

}
