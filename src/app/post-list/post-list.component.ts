import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  postSubscription: Subscription;
  posts: any[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
