import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDefinitionComponent } from './form-definition.component';

describe('FormDefinitionComponent', () => {
  let component: FormDefinitionComponent;
  let fixture: ComponentFixture<FormDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
