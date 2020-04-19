import { PostsService } from '../posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})

export class ListPostsComponent {
  // Get the Posts
  public posts = [];

  constructor(private _service: PostsService) { }

  async ngOnInit() {
    this.posts = await this._service.getPosts();
  }

  async deleteAPost(postId) {
    await this._service.deletePost(postId);
    window.location.reload();
  }
}
