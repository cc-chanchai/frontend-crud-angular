import { Component } from '@angular/core';
import {TutorialService} from './services/tutorial.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'crudApplication';
  tests = undefined;
  
  constructor(private tutors: TutorialService){}
  test(): void{
     
     this.tutors.getAll()
     .subscribe(data => {
       this.tests = data;
       console.log(this.tests);
     })
     
  }

}
