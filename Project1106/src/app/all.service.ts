import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}
