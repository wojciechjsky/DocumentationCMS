import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./views/content/page-not-found/page-not-found.component";
import {RichtextComponent} from "./views/content/page-create/richtext/richtext.component";
import {FilesUploadComponent} from "./views/content/page-create/files-upload/files-upload.component";
import {ArticlesComponent} from "./views/content/page-output/articles.component";
import {PageCreateComponent} from "./views/content/page-create/page-create.component";
import {ArticleEditorComponent} from "./shared/components/partial-view/article-editor/article-editor.component";
import {CreateTopicComponent} from "./views/content/page-create/create-topic/create-topic.component";
import {DisplayPageComponent} from "./views/content/page-output/display-page/display-page.component";
import {NewPageComponent} from "./views/content/page-create/new-page/new-page.component";

const routes: Routes = [
  // ROUTES TO EXISTING ARTICLES in GROUP
  {path: '', redirectTo: '/articles', pathMatch: 'full'},
  {path: 'articles', component: ArticlesComponent},
  {path: 'articles/:id', component: DisplayPageComponent},

  {path: 'editor', component: ArticleEditorComponent},

  // ROUTES FOR COMPONENTS RESPONSIBLE TO CREATE, DELETE OR EDIT PAGES
  {path: 'page-create', component: PageCreateComponent},
  {path: 'page-create/create-topic', component: CreateTopicComponent},
  {path: 'page-create/new-page', component: NewPageComponent},
  {path: 'page-create/richtext', component: RichtextComponent},
  {path: 'page-create/files-upload', component: FilesUploadComponent},


  {path: '**', component: PageNotFoundComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
