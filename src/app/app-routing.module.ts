import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';

const routes: Routes = [
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'template-reference-variable', component: TemplateReferenceVariableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
