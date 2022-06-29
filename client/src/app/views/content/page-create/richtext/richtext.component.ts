import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {regex, regexErrors} from "../../../../shared";

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss']
})
export class RichtextComponent implements OnInit {

  form: FormGroup;
  regexErrors = regexErrors;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      input: [null, {
        dateOfUpdateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(regex.latinAndSpaces)
        ]
      }],
      textarea: [null, {
        dateOfUpdateOn: 'change'}]
    });
  }
  onSubmit(): void {
    console.log("Submit!")
  }

  onPatchValue() {
    this.form.patchValue({input: 'test', textarea: 'Some content....'});
  }

}
