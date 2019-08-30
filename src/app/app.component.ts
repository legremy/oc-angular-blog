import { Posts } from "./models/posts-mock";
import { Title } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { Post } from "./models/post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  posts: Post[];

  constructor(private title: Title) {
    this.posts = Posts;
  }
  ngOnInit(): void {
    this.title.setTitle("Mon super blog");
  }
}
