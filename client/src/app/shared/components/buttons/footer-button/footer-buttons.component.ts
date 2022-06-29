import {Component, Input} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import {IPage} from "../../../models/IPage";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.scss']
})
export class FooterButtonsComponent {

  navigation_next: number;
  navigation_previous: number;
  totalLength: number;

  routeParam: Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute) {

    this.routeParam = this.route.pathFromRoot[1].url
      .subscribe(val => {
        this.navigation_previous = parseInt(val[1].path) - 1
        this.navigation_next = parseInt(val[1].path) + 1
      });
    this.dataService.getAllPagesAsObservable().subscribe(data => {
      this.totalLength = data.length
    })
  }

  ngOnInit() {
    this.dataService.getAllPagesAsObservable().subscribe(data => {
      this.totalLength += 1;
      console.log(this.totalLength)
    })
  }


  onSelected(id: number): void {
    this.dataService.getSinglePage(id);
  }

}
