import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../posts.service';
import {Subscription} from 'rxjs'


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts = [{ title: "fisrt", content: "algo" },
  //         { title: "second", content: "algo2" }]
  componentPosts: Post[] = [];
  private postsSub: Subscription;
  
  constructor(public postService: PostService) { }

  ngOnInit() {
    this.componentPosts = this.postService.getPosts();
    // make an observable to be able to get the data
    // using a subscription in order to unload any  subscription for this component 
    // when no longer in defined in the doom when destroy
    this.postsSub = this.postService.getPostsUpdatedListener()
    .subscribe((posts: Post[])=>{
      this.componentPosts = posts

    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // prevents memory leaks
    this.postsSub.unsubscribe();
  }


}
