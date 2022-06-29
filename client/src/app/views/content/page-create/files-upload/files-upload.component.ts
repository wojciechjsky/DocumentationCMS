import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {regex, regexErrors} from "../../../../shared";


export interface DialogData {
  multiple: boolean;
  crop: boolean;
}

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {


  form: FormGroup;
  regexErrors = regexErrors;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, {
        dateOfUpdateOn: 'change',
      }],
      alt: [null, {
        dateOfUpdateOn: 'change'
      }]
    });
  }

  onSubmit(): void {
    console.log("Submit!")
  }

  onPatchValue() {
    this.form.patchValue({title: 'test', alt: 'Some content....'});
  }

}
