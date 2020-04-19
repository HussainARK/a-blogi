import { PostsService } from './../posts.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-create-post',
	templateUrl: './create-post.component.html',
	styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
	public postTitle: String;
	public postAuthor: String;
	public postContent: String;

	constructor(private _service: PostsService) { }

	async createAPost(title: String, author: String, content: String) {
		await this._service.createPost(title, author, content);
		window.location.pathname = '/';
	}
}
