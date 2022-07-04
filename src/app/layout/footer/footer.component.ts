import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ea-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  visibility: boolean = false;
  innerWidth: any;
  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  rotateArrow(ele: HTMLElement) {
    ele.classList.toggle('rotate-arrow');
  }
  cancelBorder(ele: HTMLElement) {
    ele.classList.toggle('change-border');
  }
  showPanel(ele: HTMLElement) {
    if (this.innerWidth > 1024) {
      this.visibility = !this.visibility;
    } else {
      ele.classList.toggle('show-select');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
