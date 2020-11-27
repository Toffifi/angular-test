import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Post, PostService } from '../services/post.service';

@Component({
  selector: 'app-inside-post',
  templateUrl: './inside-post.component.html',
  styleUrls: ['./inside-post.component.scss']
})
export class InsidePostComponent implements OnInit {

  post: Post;
  isDisable = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postService.getPostById(+params.id);
    });
  }

  loadPost(): void {
    const nextPostId = this.post.id + 1;
    if (this.postService.posts.length > nextPostId) {
      this.router.navigate(['/posts', nextPostId]);
    }
    if (this.postService.posts.length === nextPostId + 1) {
      this.isDisable = true;
    }
  }
}
