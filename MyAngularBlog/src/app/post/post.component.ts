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
  }

  ngOnInit() {

  }

}
