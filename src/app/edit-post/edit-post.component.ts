import { PostsService } from './../posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {
  public selectedPostId: Number;
  public newPostTitle: String;
  public newPostAuthor: String;
  public newPostContent: String;

  constructor(private _service: PostsService) { }
  
  async editAPost(postId: Number, newTitle: String, newAuthor: String, newContent: String) {
    await this._service.editPost(postId, newTitle, newAuthor, newContent);
    window.location.reload();
  }
}
