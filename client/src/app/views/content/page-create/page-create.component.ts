import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../shared/services/data.service";


@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.scss']
})
export class PageCreateComponent implements OnInit {

  TOPICS_URL = 'http://localhost:3000/pages'

  pages: any;

  constructor(private http: HttpClient,
              private dataService: DataService) {
  }

  ngOnInit(): void {

    this.dataService.getAllPagesAsObservable().subscribe(res => {
      this.pages = res;
    });
  }
  onSelected(id: number): void {
    this.dataService.getSinglePage(id)
  }

  /*
TO RUN you need to install json-server on your local machine and run command:
json-server --watch database.json
 */

}
