import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureBComponent} from './feature-b.component';
import {FeatureBRoutingModule} from './feature-b-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {SplitterModule} from 'primeng/splitter';

@NgModule({
  declarations: [
    FeatureBComponent
  ],
  imports: [
    CommonModule,
    FeatureBRoutingModule,
    SharedModule,
    SplitterModule
  ]
})
export class FeatureBModule { }
