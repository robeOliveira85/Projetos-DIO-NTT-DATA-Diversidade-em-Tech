import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articleList } from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  id: string | null = '0';
  title: string = '';
  body: string = '';
  image: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = articleList.filter((a) => a.id.toString() == id)[0];

    this.title = result.title;
    this.body = result.body;
    this.image = result.image;
  }
}
