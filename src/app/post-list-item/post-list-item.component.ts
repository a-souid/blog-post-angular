import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: number;
  @Input() indexOfPost: number;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  lovePlus() {
    this.postLoveIts++;
    this.postService.loveItsUpDate(this.indexOfPost, this.postLoveIts);
  }

  loveMinus() {
    this.postLoveIts--;
  }

  onDeletePost() {
    this.postService.deletePost(this.indexOfPost);
  }
}
