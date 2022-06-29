import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../shared/services/data.service";
import {IPageNameId} from "../../../shared/models/IPageNameId";



@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  pageNameId: IPageNameId[];

  isHidden = true;
  data:any

  pageId: number;
  pages: IPageNameId[];

  constructor(private http: HttpClient,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getPageNameId();
  }

  getPageNameId() {
    this.dataService.getAllPageNameId().subscribe(page => this.pages = page)
  }

  hideMenu(): void {
    this.isHidden = !this.isHidden;
  }


  onSelected(id: number): void {
    this.dataService.getSinglePage(id);
  }
}

