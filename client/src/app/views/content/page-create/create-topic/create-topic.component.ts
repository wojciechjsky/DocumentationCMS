import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {regex, regexErrors} from "../../../../shared";

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, {
        dateOfUpdateOn: 'blur',
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
      }]
    });
  }
  onSubmit(): void {
    console.log("Submit!")
  }

  onPatchValue() {
    this.form.patchValue({title: 'test tile', url: 'test url'});
  }
}
