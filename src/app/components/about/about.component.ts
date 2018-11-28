import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

@Injectable()
export class AboutComponent implements OnInit {
  
  dataAbout: any = {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  	this.httpClient.get('http://127.0.0.1:5000/about').subscribe(data => {
  			this.dataAbout = data as JSON;
  			console.log(this.dataAbout)
  		})
  }

}
