import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Post, PostService } from '../services/post.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements DoCheck, OnInit {

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  posts: Post[] = this.postService.posts;
  isShowIds = false;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.isShowIds = !!params.showIds;
    });
  }

  ngDoCheck(): void {
    if (this.posts.length !== this.postService.posts.length){
      this.posts = this.postService.posts;
    }
  }

  updatePosts(post: Post): void {
    this.postService.updatePosts(post);
  }

  showIdsProgram(): void {
    this.router.navigate(['/posts'], {
      queryParams: {
        showIds: true
      }
    });
  }
}
