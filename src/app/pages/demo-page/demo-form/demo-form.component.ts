import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { languages } from '../../../constants/languages';

export const initialDemoForm: DemoForm = {
  firstName: '',
  lastName: '',
  username: '',
  language: 'en',
  rememberMe: true,
  rememberOthers: false
};

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {
  public demoForm: FormGroup;
  public languages: { name: string; value: string }[];

  @Output()
  public confirm: EventEmitter<DemoForm> = new EventEmitter<DemoForm>();

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit() {
    this.demoForm = this.formBuilder.group(initialDemoForm);
    this.languages = languages;
  }

  public cancel() {
    this.demoForm.reset(initialDemoForm);
  }

  public submit() {
    this.confirm.emit(this.demoForm.value);
  }
}
