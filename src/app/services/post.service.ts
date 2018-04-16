import { Injectable } from '@angular/core';
import {Post} from '../models/post'
@Injectable()
export class PostService {

		constructor() { }

		all(): Array<Post> {
				return [
						<Post>{
								username:"Usuario 1",
								text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
								replys: [
										<Post>{
												username:"Usuario x",
												text: "Respuesta 1"
										},
										<Post>{
												username:"Usuario y",
												text: "Respuesta 2"
										},
								]
						},
						<Post>{
								username:"Usuario 2",
								text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
								replys: [
										<Post>{
												username:"Usuario x",
												text: "Respuesta 1"
										},
								]
						},
						<Post>{
								username:"Usuario 3",
								text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
								replys: []
						}
				];
		}

}
