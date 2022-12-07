import { Component, OnInit } from '@angular/core';

import { Article } from 'src/app/data/article.model';
import { articleList } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];

  ngOnInit(): void {
    this.articles = articleList;
  }
}
