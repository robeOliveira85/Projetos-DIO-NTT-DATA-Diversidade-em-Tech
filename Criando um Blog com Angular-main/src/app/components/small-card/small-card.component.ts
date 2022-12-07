import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input() id: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() body: string = '';

  constructor(private route: ActivatedRoute) {}
}
