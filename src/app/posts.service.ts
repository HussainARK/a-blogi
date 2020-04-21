import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';

import axios from 'axios';
// import { config } from 'dotenv';

// config();

@Injectable({ providedIn: 'root' })
export class PostsService {
	private _apiUrl: string = 'https://blogi-backend.herokuapp.com';

	constructor() { }

	async getPosts() {
		return await axios.get(this._apiUrl + '/posts?key=' + environment.API_KEY)
			.then(response => (response.data))
			.catch(err => console.log(err.message));
	}

	async createPost(postTitle: String, postAuthor: String, postContent: String) {
		return await axios.post(
			this._apiUrl + '/posts?key=' + environment.API_KEY, 
			{ "title": postTitle, "author": postAuthor, "content": postContent }, 
			{"headers": {['Content-Type']: "application/json" } },
		).then(response => (response.data))
		.catch(err => console.log(err.message));
	}

	async editPost(postId: Number, newPostTitle: String, newPostAuthor: String, newPostContent: String) {
		return await axios.put(
			this._apiUrl + '/posts/' + postId + '?key=' + environment.API_KEY, 
			{ "title": newPostTitle, "author": newPostAuthor, "content": newPostContent }, 
			{"headers": {['Content-Type']: "application/json" } }
		).then(response => (response.data))
		.catch(err => console.log(err.message));
	}

	async deletePost(selectedPostId: Number) {
		return await axios.delete(
			this._apiUrl + '/posts/' + selectedPostId +'?key=' + environment.API_KEY
		).then(response => (response.data))
		.catch(err => console.log(err.message));
	}
}
