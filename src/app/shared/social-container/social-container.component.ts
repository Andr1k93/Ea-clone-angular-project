import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ea-social-container',
  templateUrl: './social-container.component.html',
  styleUrls: ['./social-container.component.css'],
})
export class SocialContainerComponent implements OnInit {
  constructor() {}

  innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
