import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent {

  @Output() hideMenu = new EventEmitter<void>();
  @Input() isHidden: boolean = true;
}
