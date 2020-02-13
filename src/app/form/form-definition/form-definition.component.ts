import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Step } from './step.model';
import { FormGroupService } from './formgroup-service';

@Component({
  selector: 'app-form-definition',
  templateUrl: './form-definition.component.html',
  styleUrls: ['./form-definition.component.css'],
  providers: [FormGroupService]
})
export class FormDefinitionComponent implements OnInit {

  @Input() step: Step;
  @Output() onClick = new EventEmitter<any>();
  public form: FormGroup;

  constructor(private formgroupService: FormGroupService) { }

  ngOnInit() {
    this.form = this.formgroupService.toFormGroup(this.step.controls);
  }

  onButtonClick(action: string) {
    let stepData = <Step>{
      uid: this.step.uid,
      stepName: this.step.stepName,
      controlValues: this.form.value,
      isFirst: this.step.isFirst,
      isLast: this.step.isLast
    },

    actionType = action;
    this.onClick.emit({stepData, actionType});
  }

}
