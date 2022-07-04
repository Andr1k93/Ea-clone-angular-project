import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ea-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css'],
})
export class TopNavbarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  /* utilizzo per distinguere il comportamento dei bottoni */
  loginClicked: boolean = false;
  helperClicked: boolean = false;

  loginButtonClick() {
    if (this.loginClicked == false) {
      this.loginClicked = true;
      if (this.helperClicked == true) {
        this.helperClicked = false;
      }
    } else {
      this.loginClicked = false;
    }
  }

  helperButtonClick() {
    if (this.helperClicked == false) {
      this.helperClicked = true;
    } else this.helperClicked = false;
  }

  changeVisibility(hiddenContent: HTMLElement, navbar: HTMLElement) {
    if (this.loginClicked || this.helperClicked) {
      this.loginClicked = !this.helperClicked;
      hiddenContent.style.height = '400px';
      navbar.style.backgroundColor = '#101010';
    } else {
      hiddenContent.style.height = '0px';
      navbar.style.backgroundColor = '#161616';
    }
  }
}
