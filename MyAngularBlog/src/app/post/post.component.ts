import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: String;
  @Input() postContent: String;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  constructor() {
    this.postLoveIts = 0;
  }

  ngOnInit() {

  }

  onLoveIt() {
    this.postLoveIts = this.postLoveIts + 1;
    console.log(this.postLoveIts);
  }

  onDontLoveIt() {
    this.postLoveIts = this.postLoveIts - 1;
    console.log(this.postLoveIts);
  }

  getColor() {
    if (this.postLoveIts === 0) {
      return 'black';
    } else if (this.postLoveIts > 0) {
      return 'green';
    } else {
      return 'red';
    }
  }

}
