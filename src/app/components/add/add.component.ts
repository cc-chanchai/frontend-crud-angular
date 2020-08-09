import { Component, OnInit } from '@angular/core';
import {TutorialService} from 'src/app/services/tutorial.service'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }
  
  saveTutorial(): void{
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };
    this.tutorialService.create(data)
    .subscribe(
      res => {
        this.submitted = true;
        console.log(res);
        
      },error => {
        console.log(error);
        
      }
    )
  }

  newTutorial(): void{
    this.submitted = false,
    this.tutorial = {
      title: '',
      description: '',
      published: false
    }
  }
}
