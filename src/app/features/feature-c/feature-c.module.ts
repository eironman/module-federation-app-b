import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureCComponent} from './feature-c.component';
import {FeatureCRoutingModule} from './feature-c-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    FeatureCComponent
  ],
  imports: [
      CommonModule,
      FeatureCRoutingModule,
      SharedModule,
      PanelModule
  ]
})
export class FeatureCModule { }
