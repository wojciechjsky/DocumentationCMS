import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {regex} from "../../../../shared";
import {DataService} from "../../../../shared/services/data.service";
import {IPage} from "../../../../shared/models/IPage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {

  form: FormGroup;
  markdownPage: IPage;

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, {
        value: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(regex.latinAndSpaces)
        ]
      }],
      url: [null, {
        dateOfUpdateOn: 'change',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(regex.latinAndSpaces)
        ]
      }],
      markdown: [null, {
        value: 'blur',
      }],
    });
  }

  getValuesFromForm(){
    this.markdownPage = {
      type: 'Group 1',
      name: this.form.controls['name'].value,
      url: this.form.controls['url'].value,
      dateOfCreation: new Date().toLocaleString(),
      dateOfUpdate: new Date().toLocaleString(),
      content_en: this.form.controls['markdown'].value,
      content_nl: ""
    }
    console.log('before post', this.markdownPage);
  }

  onSubmit(): void {
    this.getValuesFromForm();
    this.dataService.createNewPage(this.markdownPage).subscribe();
    setTimeout(()=>this.dataService.refreshPage(), 100);
  }
}
