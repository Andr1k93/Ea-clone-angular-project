import { New } from './../../models/New';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ea-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent implements OnInit {
  @Input() new!: New;

  constructor() {}

  ngOnInit(): void {}
}
