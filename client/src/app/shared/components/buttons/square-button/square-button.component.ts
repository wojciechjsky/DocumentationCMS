import {Component, Input, OnInit} from '@angular/core';
import {DownloadService} from "../../../services/download.service";

@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.scss']
})
export class SquareButtonComponent {

  @Input() buttonDescription: string;
  @Input() btnPxWidth: string;
  @Input() btnActiveLinkDecorator: string;
  @Input() icon?: string;

  constructor(private downloadService: DownloadService) {
  }

}
