import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

@Injectable()
export class SkillsComponent implements OnInit {

  dataSkills: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  this.httpClient.get('http://127.0.0.1:5000/skills').subscribe(data => {
  			this.dataSkills = data as JSON;
  			console.log(this.dataSkills)
  		})
  }

}
