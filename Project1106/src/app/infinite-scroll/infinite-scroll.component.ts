import { AllService } from './../all.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {
  posts: any;
  titles: Array<string> = [];

  throttle = 0;
  distance = 2;
  userId = 1;

  constructor(private allAPI: AllService) { }

  ngOnInit(): void {
    let obs$ = this.allAPI.getPosts(this.userId);
    obs$.subscribe((response: Post[]) => {
      this.posts = response;
      console.log(this.posts)
    });  
  }

  onScroll() {
    this.allAPI.getPosts(++this.userId)
    .subscribe((response: Post[]) => {
      this.posts.push(...response);
      console.log(this.posts)
    });
  }


}
