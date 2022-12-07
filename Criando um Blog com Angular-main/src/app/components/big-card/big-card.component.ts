import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input() id: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() body: string = '';
}
