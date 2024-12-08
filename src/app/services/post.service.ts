// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {

//   posts = [
//     { id: 1, titre: "Premier post", contenu: "Détails du premier post" },
//     { id: 2, titre: "Deuxième post", contenu: "Détails du deuxième post" },
//     { id: 3, titre: "Troisième post", contenu: "Détails du troisième post" },
//   ];

//   constructor() { }
  
//   getPosts() {
//     return this.posts;
   
//   }


// }




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/postList'; // URL du backend

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl); // Récupère les données via API REST
  }
}
