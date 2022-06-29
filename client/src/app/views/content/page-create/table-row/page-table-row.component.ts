import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../../shared/services/data.service";

@Component({
  selector: 'app-page-table-row',
  templateUrl: './page-table-row.component.html',
  styleUrls: ['./page-table-row.component.scss']
})
export class PageTableRowComponent {

  @Input() pageId: number;
  @Input() pageName: string;
  @Input() dateOfUpdate: Date | string;
  @Input() dateOfCreation: Date | string;
  @Input() bgcColor: string;

  constructor(private dataService: DataService) {
  }
  onClickDelete() {
    this.dataService.deletePage(this.pageId).subscribe();
    this.dataService.refreshPage();
  }
}
