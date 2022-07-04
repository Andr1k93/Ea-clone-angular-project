import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ea-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  @Input() background!: string;
  @Input() infoDescription!: string;
  @Input() buttonStyle!: { title: string; class: string };

  constructor() {}

  ngOnInit(): void {}
}
