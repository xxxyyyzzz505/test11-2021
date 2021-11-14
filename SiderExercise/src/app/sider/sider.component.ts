import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {
  imageSize: number;
  x: number = 0;
  isChanging: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.imageSize = event.value;
    console.log(event);
  }
  onInput(event) {
    this.imageSize = event.value;
    console.log(event.value);
  }

  onMousedown(event) {
    this.x = event.offsetX;
    this.isChanging = true;
  }

  onMousemove(event) {
    if (this.isChanging === true) {
      this.mouseEventControl(this.x, event.offsetX);
      this.x = event.offsetX;
    }
  }

  onMouseup(event) {
    if (this.isChanging === true) {
      this.mouseEventControl(this.x, event.offsetX);
      this.x = 0;
      this.isChanging = false;
    }
  }

  mouseEventControl(x1, x2) {
    let change = x2 - x1
    if (change > 200 - this.imageSize) {
      this.imageSize = 200;
    } 
    if (this.imageSize + change < 1) {
      this.imageSize = 1
    }
    this.imageSize = this.imageSize + change;

  }

}
