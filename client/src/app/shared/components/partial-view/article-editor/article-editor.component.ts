import {AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../services/data.service";
import {IPage} from "../../../models/IPage";
import {ShareService} from "../../../services/share.service";
import {NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleEditorComponent implements OnInit, OnChanges, AfterViewInit {

  markdownPage: IPage;
  form: FormGroup;
  subscription: Subscription;
  browserRefresh = false;

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder,
              private dataService: DataService,
              private shareService: ShareService) {

    this.markdownPage = this.shareService.getUserSettings();
  }


  ngOnInit(): void {


    this.onArticleEditPatch();
    this.form = this.formBuilder.group({
      title: [this.markdownPage.name, {
        dateOfUpdateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]
      }],
      content: [this.markdownPage.content_en, {
        dateOfUpdateOn: 'change'
      }]
    });

    console.log('ng on init triggers')
  }

  ngOnChanges() {
    this.editPageTitle();
    this.editPageContent();
  }

  ngAfterViewInit() {
    this.shareService.setSettings(this.markdownPage)
  }

  get descriptionRawControl() {
    return this.form.controls.description as FormControl;
  }

  onArticleEditPatch(): void {
    this.markdownPage = this.dataService.getMarkdownData();
  }

  editPageTitle(): void {
    this.markdownPage.name = this.form.controls['title'].value;
  }

  editPageContent(): void {
    this.markdownPage.content_en = this.form.controls['content'].value;
  }

  onSaveClick(): void {
    this.editPageTitle();
    this.editPageContent();
  }

  refreshOnClick(): void {
    this.dataService.refreshPage();
    this.dataService.updateSinglePage(this.markdownPage).subscribe();

  }
}
