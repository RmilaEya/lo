
// import { Component, OnInit } from '@angular/core';
// import { PostService } from '../services/post.service';

// @Component({
//   selector: 'app-post-list',
//   templateUrl: './post-list.component.html',
//   styleUrls: ['./post-list.component.css']
// })
// export class PostListComponent implements OnInit {
//   posts: { id: number, titre: string, contenu: string }[] = [];


//   constructor(private postService: PostService) { }

//   ngOnInit(): void {
//     this.posts = this.postService.getPosts();
//   }

// }


import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data; // Affectation des données reçues de l'API
    });
  }
}
