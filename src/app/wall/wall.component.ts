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
		constructor(private postService: PostService) {
				this.posts = postService.all();
		}

  ngOnInit() {
  }

}
