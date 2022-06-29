import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterButtonsComponent} from "./footer-button/footer-buttons.component";
import {ToggleButtonComponent} from "./toggle-button/toggle-button.component";
import {CircleButtonComponent} from "./circle-button/circle-button.component";
import {RouterModule} from "@angular/router";
import {RectangleButtonComponent} from './rectangle-button/rectangle-button.component';
import {SquareButtonComponent} from './square-button/square-button.component';
import {FormControl, FormGroup} from "@angular/forms";


@NgModule({
  declarations: [
    FooterButtonsComponent,
    ToggleButtonComponent,
    CircleButtonComponent,
    RectangleButtonComponent,
    SquareButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterButtonsComponent,
    ToggleButtonComponent,
    CircleButtonComponent,
    RectangleButtonComponent,
    SquareButtonComponent
  ]
})
export class ButtonsModule {
}
