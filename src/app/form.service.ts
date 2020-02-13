import { Injectable } from '@angular/core';

@Injectable()

export class FormService {

  private formDefiniton = [
    {
      stepName: 'Step 1',
      uid: '1324-1adfs-234g-dsfg',
      isFirst: true,
      isLast: false,
      controls: [
        {
          label: 'First Name',
          name: 'first-name',
          type: 'text',
          required: true,
          length: 30
        },
        {
          label: 'Last Name',
          name: 'last-name',
          type: 'text',
          required: true,
          length: 30
        },
        {
          label: 'Address',
          name: 'address',
          type: 'textarea',
          required: true,
          length: 300
        }
      ]
    },
    {
      stepName: 'Step 2',
      uid: '1987-qwtq-jhdf-8789',
      isFirst: false,
      isLast: true,
      controls: [
        {
          label: 'Interested In?',
          name: 'interested-in-checkbox',
          type: 'checkbox',
          required: true,
          options: [
            {name:'Books', value:'Books', checked:false},
            {name:'TV', value:'TV', checked:false},
            {name:'Video games', value:'Video games', checked:false}
          ]
        }
      ]
    }
  ]

  constructor() { }

  getFormDefiniton() {
    return this.formDefiniton;
  }
}
