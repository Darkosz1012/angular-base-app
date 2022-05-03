import { Component, OnInit } from '@angular/core';
import { Post } from '@app/_models/post';
import { PostService } from '@app/_services/post.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  //     id:1,
  //     username:"test",
  //     content:"test"
  // },
  // {
  //     id:2,
  //     username:"darek",
  //     content:"test"
  // },]
  loading = false;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loading = true;
        this.postService.getAll().pipe(first()).subscribe((posts:any) => {
            posts = posts.map((val:any)=>{
              val.username = val.user.username;
              return val
            })
            
            this.loading = false;
            this.posts = posts;
            this.posts = this.posts.sort((a:Post,b:Post)=>{
              if (a.id > b.id)
                  return -1
              if (a.id < b.id)
                  return 1
              // a równe b
              return 0
            })
            console.log(this.posts)
        });
  }

}
