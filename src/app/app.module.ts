import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormDefinitionComponent } from './form/form-definition/form-definition.component';
import { FormService } from './form.service';
import { CheckboxComponent } from './form/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormDefinitionComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
