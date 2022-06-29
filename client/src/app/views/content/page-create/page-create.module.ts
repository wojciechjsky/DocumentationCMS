import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropZoneDirective} from "./files-upload/drop-zone";
import {PageTableRowComponent} from './table-row/page-table-row.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import {ButtonsModule, ControlsModule, ViewSharedModule} from "../../../shared";
import {ReactiveFormsModule} from "@angular/forms";
import { NewPageComponent } from './new-page/new-page.component';


@NgModule({
  declarations: [DropZoneDirective, PageTableRowComponent, CreateTopicComponent, NewPageComponent],
  imports: [
    CommonModule,
    ViewSharedModule,
    ControlsModule,
    ButtonsModule,
    ReactiveFormsModule
  ],
  exports: [
    DropZoneDirective,
    PageTableRowComponent
  ]
})
export class PageCreateModule {
}
