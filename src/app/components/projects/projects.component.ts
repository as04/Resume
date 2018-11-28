import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

@Injectable()
export class ProjectsComponent implements OnInit {

  dataProjects: any = [];

  constructor( private httpClient: HttpClient ) { }

  ngOnInit() {

  	  	this.httpClient.get('http://127.0.0.1:5000/projects').subscribe(data => {
  			this.dataProjects = data as JSON;
  			console.log(this.dataProjects)
  		})
  }

}
