import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  currentTutorial = null;
  message = '';
  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  };

  getTutorial(id: String): void{
    this.tutorialService.get(Number(id)).subscribe(
      data => {
        this.currentTutorial = data;
      },
      error => {
        console.log(error);
        
      }
    )
  };

  updateTutorial(): void{
    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
    .subscribe(
      res => {
        this.message = "update success!"
      },
      error => {
        console.log(error);
        
      }
    )
  };

  updatePublished(status: boolean): void{
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    }

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe(
        res => {
          this.currentTutorial.published = status;
        },
        error => {
          console.log(error);
        }
      )
  }

  deleteTutorial(): void{
    this.tutorialService.delete(this.currentTutorial.id)
    .subscribe(
      res => {
        this.router.navigate(['/list']);
      },
      error => {
        console.log(error);     
      }
    )
  }

}
