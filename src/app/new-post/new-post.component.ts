import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private route: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
        title: ['', Validators.required],
        content: ['', Validators.required],
      }
    );
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const postTitle = formValue['title'];
    const postContent = formValue['content'];
    this.postService.addPost(postTitle, postContent);
    this.route.navigate(['/posts']);
  }
}
