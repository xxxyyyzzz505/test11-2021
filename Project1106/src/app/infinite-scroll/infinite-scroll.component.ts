import { AllService } from './../all.service';
import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {
  posts: any;
  titles: Array<string> = []

  constructor(private allAPI: AllService) { }

  ngOnInit(): void {
    let obs$ = this.allAPI.getPosts();
    obs$.subscribe(response => {
      this.posts = response;
      // for (let item of this.posts )
      console.log(this.posts)
    });  
  }


}
