import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleEditorComponent} from "./article-editor/article-editor.component";
import {PageTitleComponent} from "./page-title/page-title.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ControlsModule} from "../controls";
import {ButtonsModule} from "../buttons";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ArticleEditorComponent,
    PageTitleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlsModule,
    ButtonsModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    ArticleEditorComponent,
    PageTitleComponent
  ],
})
export class ViewSharedModule {
}
