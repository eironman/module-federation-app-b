import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FeatureCComponent} from './feature-c.component';

const routes: Routes = [
  {path: '',  component: FeatureCComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureCRoutingModule { }
