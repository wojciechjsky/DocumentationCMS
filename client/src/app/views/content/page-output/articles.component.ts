import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  currentTitle: any;

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    this.getTitle();
  }

  getTitle() {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationStart) {
        this.currentTitle = value;
      }
    })
  }
}
