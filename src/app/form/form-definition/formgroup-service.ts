import { FormControl, Validators, FormGroup } from '@angular/forms';

export class FormGroupService {
  constructor() {}

  toFormGroup(controls) {
    let group: any = {};
    controls.forEach(inputField => {
      let validationArray = [];
      
      group[inputField.name] = new FormControl();
      
      if (inputField.required) {
        validationArray.push(Validators.required);
      }
      if (inputField.length ) {
        validationArray.push(Validators.maxLength(30));
      }
      group[inputField.name].setValidators(validationArray);
    });

    return new FormGroup(group);
  }

}
