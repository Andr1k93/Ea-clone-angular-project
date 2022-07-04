import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ea-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() title!: string;
  @Input() button!: string;
  constructor() {}

  ngOnInit(): void {}
}
