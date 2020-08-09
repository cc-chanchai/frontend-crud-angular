import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tutorials = new Object();
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.getAllTutorials();
  };

  getAllTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
        },
        error => {
          console.log(error);
        }
      )
  };

  refreshList(): void {
    this.getAllTutorials();
    this.currentIndex = -1;
    this.currentTutorial = null;
  };

  setActiveTutorial(tutorial: object, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  };

  removeAll(): void {
    this.tutorialService.deleteAll().subscribe(
      res => {
        this.getAllTutorials
      },
      error => {
        console.log(error);
      })
  };

  searchByTitle(): void{
    this.tutorialService.findByTitle(this.title).subscribe(
      data => {
        this.tutorials = data;
      },
      error => {
        console.log(error);  
      }
    )
  }

}
