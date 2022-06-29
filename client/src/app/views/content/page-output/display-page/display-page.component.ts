import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../../shared/services/data.service";
import {IPage} from "../../../../shared/models/IPage";
import {Subscription} from "rxjs";
import {DownloadService} from "../../../../shared/services/download.service";


@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.scss']
})
export class DisplayPageComponent implements OnInit {

  pageId: number | undefined;
  previous: string = 'flatcable-app';
  next: string = 'restart';
  page: IPage;

  constructor(private http: HttpClient,
              private dataService: DataService,
              private downloadService: DownloadService) {
  }

  private subscription = new Subscription();


  ngOnInit(): void {
    this.subscription.add(
      this.dataService.subjectPage.subscribe(page => {
        this.page = page;
        this.pageId = page.id;
      }))
  }

  onEditClick() {
    this.dataService.setMarkdownData(this.page);
  }

  downloadPage(){
    // this.downloadService.sendToPdf('content', 'some Title')
    this.downloadService.makePDF();
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
