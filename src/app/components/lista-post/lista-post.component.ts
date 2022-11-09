import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interfaces';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  arrPost: Post[];
  constructor(
    private blogService: BlogService,
  ) {

    this.arrPost = this.blogService.getAll()
  }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.arrPost = this.blogService.getByCategory(event.value);
  }


}
