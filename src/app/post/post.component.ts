import {
    ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit,
    Output
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Post, PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {

  @Input() myPost: Post;
  @Input() isShowIds: boolean;
  @Output() remove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  constructor(
    private postService: PostService
  ) {}

  removePost(): void {
    this.postService.removePost(this.myPost.id);
  }

}
