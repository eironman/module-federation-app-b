import {Component, OnInit} from '@angular/core';
import {FeatureCApiService} from './services/feature-c-api.service';
import {FeatureCModel} from './models/feature-c.model';

@Component({
  selector: 'app-feature-c',
  templateUrl: './feature-c.component.html',
  styleUrls: ['./feature-c.component.scss']
})
export class FeatureCComponent implements OnInit {
  featureCModel: FeatureCModel = undefined;

  constructor(private featureAApiService: FeatureCApiService) { }

  ngOnInit(): void {
    this.featureAApiService.getFeatureAModel().subscribe((model: FeatureCModel) => this.featureCModel = model);
  }
}
