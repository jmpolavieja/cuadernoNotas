import { Component } from '@angular/core';
import {NotaPost} from '../../models/nota';
import {HttpClient} from '@angular/common/http';
import {NotasService} from '../../services/notas.service';
import {MatList, MatListItem} from '@angular/material/list';
import {MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    MatMiniFabButton,
    MatIcon
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: NotaPost[] = [];

  constructor(private postService: NotasService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
