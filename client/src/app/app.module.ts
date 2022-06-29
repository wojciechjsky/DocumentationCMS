import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SidebarComponent} from './views/sidebar/sidebar.component';

import {SidebarMenuComponent} from './views/sidebar/sidebar-menu/sidebar-menu.component';
import {SidebarPanelComponent} from './views/sidebar/sidbar-panel/sidebar-panel.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./views/content/page-not-found/page-not-found.component";
import {HttpClientModule} from "@angular/common/http";

import {NoSanitizePipe} from "./shared/services/pipes/nosanitizerpipe";
import {RemoveDashPipe} from "./shared/services/pipes/removeDashPipe";
import {RichtextComponent} from "./views/content/page-create/richtext/richtext.component";
import {DataService} from "./shared/services/data.service";
import {ButtonsModule, ControlsModule, ViewSharedModule} from "./shared";
import {FilesUploadComponent} from "./views/content/page-create/files-upload/files-upload.component";
import {PageCreateComponent} from "./views/content/page-create/page-create.component";
import {ArticlesComponent} from "./views/content/page-output/articles.component";
import {SidebarTitleComponent} from "./views/sidebar/sidebar-title/sidebar-title.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PageCreateModule} from "./views/content/page-create/page-create.module";
import {ContentComponent} from './views/content/content.component';
import {MarkdownToHtmlModule} from "markdown-to-html-pipe";
import {DisplayPageComponent} from './views/content/page-output/display-page/display-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarPanelComponent,
    PageNotFoundComponent,
    RemoveDashPipe,
    NoSanitizePipe,
    RichtextComponent,
    FilesUploadComponent,
    PageCreateComponent,
    ArticlesComponent,
    SidebarTitleComponent,
    ContentComponent,
    DisplayPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule,
    ControlsModule,
    ReactiveFormsModule,
    PageCreateModule,
    ViewSharedModule,
    MarkdownToHtmlModule
  ],
  providers: [DataService],
  exports: [
    RemoveDashPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
