import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cdts-form',
  templateUrl: './cdts-form.component.html',
  styleUrls: ['./cdts-form.component.scss']
})
export class CdtsFormComponent implements OnInit {

  postForm: FormGroup;
  @Input()  formHeading: string;
  @Input() buttonLabel: string;
  @Input() formValues: any;
  @Output() onFormSubmit = new EventEmitter<{ formGroup: FormGroup }>();
  constructor() { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(this.formValues?.title ? this.formValues.title : null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.formValues?.description ? this.formValues.description : null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmitClick(){
    this.onFormSubmit.emit({formGroup: this.postForm});
  }
}
