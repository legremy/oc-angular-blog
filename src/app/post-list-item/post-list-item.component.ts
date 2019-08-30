import { Post } from "./../models/post";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.css"]
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit() {}

  addOneLoveIts() {
    this.post.loveIts++;
  }

  substractOneLoveIts() {
    this.post.loveIts--;
  }
}
