import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-title',
  templateUrl: './blog-title.component.html',
  styleUrls: ['./blog-title.component.css']
})
export class BlogTitleComponent {
  @Input() title:string="The Blog";
}
