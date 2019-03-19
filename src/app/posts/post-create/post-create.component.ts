import { Component, OnInit} from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  // to inject postService class to this component
  constructor(public postService: PostService) { }

  ngOnInit() {
  }

  onAddPost(postForm: NgForm){
    if (postForm.invalid) {
      return;
    }
    const post: Post = {
      title:  postForm.value.input_title,
      content: postForm.value.input_content
    }
    this.postService.addPost(post)
    // emits an event that a post was created
    // this.postCreated.emit(post);
  }
}
