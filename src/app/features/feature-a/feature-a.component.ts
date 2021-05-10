import {Component, OnInit} from '@angular/core';
import {FeatureAApiService} from './services/feature-a-api.service';
import {FeatureAModel} from './models/feature-a.model';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss']
})
export class FeatureAComponent implements OnInit {
  featureAModel: FeatureAModel = undefined;

  constructor(private featureAApiService: FeatureAApiService) { }

  ngOnInit(): void {
    this.featureAApiService.getFeatureAModel().subscribe((model: FeatureAModel) => this.featureAModel = model);
  }
}
