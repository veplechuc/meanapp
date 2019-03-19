import { Post } from './post.model';
import { Subject } from 'rxjs'

export class PostService {
    private posts: Post[] = [];
    private postUpdated = new Subject<Post[]>();

    getPosts(){
        // ... returns a  copy of the original array
        return [...this.posts]
    }

    getPostsUpdatedListener(){
        return this.postUpdated.asObservable();
    }
    addPost(post: Post){
        this.posts.push(post)
        this.postUpdated.next([...this.posts])
    }
}