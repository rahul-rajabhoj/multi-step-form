import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'checkbox',
    templateUrl: 'checkbox.component.html',
    providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckboxComponent),
        multi: true,
    }
  ]
})

export class CheckboxComponent implements ControlValueAccessor {

    @Input() inputField: any;
    @Input() form: FormGroup;
    private propagateChange = (_: any) => { };
    constructor() {}

    writeValue(obj: any): void {}

    registerOnTouched(fn: any): void {}

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    onChange() {
        let selectedOptionsArray = [];
        this.inputField.options.forEach(option => {
            if(option.checked) {
                selectedOptionsArray.push(option.value);
            }
        });
        this.propagateChange(selectedOptionsArray);
    }
}
