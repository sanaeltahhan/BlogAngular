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
    this.postDate = new Date();
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

}
