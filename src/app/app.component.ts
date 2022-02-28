import { Options } from '@angular-slider/ngx-slider';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AssessmentEngineResults, AssessmentResult } from './AssessmentEngineResults';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: AssessmentEngineResults | undefined;
  assessResults?: { [key: string]: Array<AssessmentResult>; } | null;
  assessment?: Array<AssessmentResult>;
  assessmentResult?:AssessmentResult;
  data:any;
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    let mp = new Map();
    this.httpClient.get("assets/data.json").subscribe(data => {
      this.results = data;
      Object.entries(this.results).forEach(
        ([key, value]) =>
          mp.set(key, value)
      );
      this.assessResults = mp.get('2021');
      for (const key in this.assessResults) {
        if (Object.prototype.hasOwnProperty.call(this.assessResults, key)) {
          const element = this.assessResults[key];
          this.assessment =  element;
          console.log(this.assessment);
          this.data = JSON.stringify(this.assessment);
          // Object.entries(this.assessment).forEach((element) => {
          //   console.log(element[1]);
          //   //console.log(this.assessmentResult.disbursementType)    
          // })       
        } 
      }      
    })
  }
}
