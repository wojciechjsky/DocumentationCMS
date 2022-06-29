import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public router: Router) { }
  currentTitle: any;

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
