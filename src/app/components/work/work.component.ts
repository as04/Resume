import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})

@Injectable()
export class WorkComponent implements OnInit {

  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  dataWork: any = [];

  constructor( private httpClient: HttpClient) { }

  ngOnInit() {

  	this.httpClient.get('http://127.0.0.1:5000/work').subscribe( data=> 
  	{
  	this.dataWork = data as JSON;
  	console.log(this.dataWork);
  	})

  }

}
