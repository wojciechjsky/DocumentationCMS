import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rectangle-button',
  templateUrl: './rectangle-button.component.html',
  styleUrls: ['./rectangle-button.component.scss']
})
export class RectangleButtonComponent {

  @Input() buttonDescription: string;
  @Input() btnPxWidth: string;
  @Input() btnPxHeight?: string;
  @Input() btnColor: string;

}
