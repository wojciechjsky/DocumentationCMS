import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-panel',
  templateUrl: './sidebar-panel.component.html',
  styleUrls: ['./sidebar-panel.component.scss']
})
export class SidebarPanelComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/pdf/examplePDF.pdf');
    link.setAttribute('download', 'Download PDF');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
