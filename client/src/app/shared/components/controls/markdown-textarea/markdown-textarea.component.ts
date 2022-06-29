import {Component, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output} from '@angular/core';
import '@github/markdown-toolbar-element'
import {FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-markdown-textarea',
  templateUrl: './markdown-textarea.component.html',
  styleUrls: ['./markdown-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MarkdownTextareaComponent),
      multi: true
    }
  ]
})
export class MarkdownTextareaComponent implements OnInit, ControlValueAccessor {
  controlId: string
  @Input() control: FormControl;
  @HostBinding('class.focus') isFocus: boolean;
  @Output() change = new EventEmitter<string>();


  value: string;
  isDisabled: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.controlId = `MarkdownEditor-${Math.floor(100000 * Math.random())}`;
    this.control = this.control ?? new FormControl();
  }

  private propagateChange: any = () => {
  };
  private propagateTouche: any = () => {
  };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouche = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  focus() {
    this.isFocus = true;
  }

  detectChange(value: string) {
    this.propagateChange(value);
    this.change.emit(value);
  }

  blur() {
    this.isFocus = false;
  }
}
