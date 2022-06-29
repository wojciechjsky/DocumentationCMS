import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from "./input/input.component";
import {FormFieldComponent} from "./form-field/form-field.component";
import {TextareaComponent} from "./textarea/textarea.component";
import { MarkdownTextareaComponent } from './markdown-textarea/markdown-textarea.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    InputComponent,
    FormFieldComponent,
    TextareaComponent,
    MarkdownTextareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    InputComponent,
    FormFieldComponent,
    TextareaComponent,
    MarkdownTextareaComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ControlsModule {
}
