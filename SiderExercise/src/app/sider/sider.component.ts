import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {
  imageSize: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.imageSize = event.value;
  }

}
