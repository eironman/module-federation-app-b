import {Injectable} from '@angular/core';
import {FeatureCModel} from '../models/feature-c.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureCApiService {

  constructor(private httpClient: HttpClient) {}

  getFeatureAModel(): Observable<FeatureCModel> {
    return this.httpClient.get<FeatureCModel>(environment.appBUrl + '/assets/response-mockup/feature-c.json');
  }
}
