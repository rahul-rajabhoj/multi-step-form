import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Step } from './form-definition/step.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  private form = [];
  public activeStepIndex: number;
  submittedSteps: Array<any> = [];

  constructor(private formService: FormService) {
    this.form = this.formService.getFormDefiniton();
    this.activeStepIndex = 0;
  }
  
  onClick(event) {
    let step: Step = event["stepData"],
    actionType = event["actionType"],
    pageIndex = this.submittedSteps.findIndex((data: Step) => data.uid == step.uid);

    if (pageIndex === -1) {
      this.submittedSteps.push(step);
    } else {
      this.submittedSteps[pageIndex] = step;
    }

    if(actionType === "submit") {
      let formValue = {};
      this.submittedSteps.forEach((step: Step)=> {
        const controlValues = step.controlValues;

        for (let key in controlValues) {
          formValue[key] = controlValues[key];
        }
      });
      console.log(formValue);
    } else if(actionType === "next") {
      this.activeStepIndex += 1;
    }

  }

}
