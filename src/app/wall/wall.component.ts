import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post'
import {PostService} from '../services/post.service'

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
		posts: Array<Post> = [];
		postState: number = 0;
		post: Post;
		
		constructor(private postService: PostService) {
				this.posts = postService.all();
				this.post = this.createPost();
		}

		ngOnInit() {
		}

		createPost(){
				return <Post>{
						username: "deadpool",
						text: "",
						replys: <Array<Post>>[],
						image: "https://img00.deviantart.net/2c38/i/2012/287/8/d/spideypool_logo_by_irocandrew-d5hqgr9.png"
				}
		}

		getPostState(){
				return this.postState == 0 ? "closed" : "open";
		}

		changeSate(state){
				this.postState = state;
		}

		onCancelPost(){
				this.postState=0;
				this.post = this.createPost();
		}

		onCreatePost(){
				this.posts.unshift(this.post);
				this.postState=0;
				this.post = this.createPost();
		}

}
