import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showMenu = true;

  ngOnInit() {
    this.checkWindowWidth();
    fromEvent(window, 'resize').subscribe(() => this.checkWindowWidth());
  }

  checkWindowWidth() {
    const innerWidth = window.innerWidth;
    this.showMenu = innerWidth >= 768;
  }
}
