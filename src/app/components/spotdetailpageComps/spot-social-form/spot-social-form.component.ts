import { Component, Input } from '@angular/core';
import { commentsChildren } from 'src/app/interfaces/commentsChildren';
import { surfspot } from 'src/app/interfaces/surfspot';
import { SurfspotsService } from 'src/app/services/surfspots.service';

@Component({
  selector: 'app-spot-social-form',
  templateUrl: './spot-social-form.component.html',
  styleUrls: ['./spot-social-form.component.scss']
})
export class SpotSocialFormComponent {

  today = new Date();
  now = this.today.toLocaleString();
  commentText!: string
  @Input() currentSpot!: surfspot

  constructor(private surfspotService: SurfspotsService){}

  newComment(){
    let inputData = {
      text: this.commentText,
      _id: this.currentSpot._id,
      name: "guest",
      date: this.now,
      avatar: "https://res.cloudinary.com/dac3s5ere/image/upload/v1673470866/mysurfspot/guestUser_ezwpvs.jpg",
      picture: "null",
    };
    

    let dbComments = this.currentSpot.comments.reverse().map((comment: commentsChildren) => {
      return {
        text: comment.text,
        _id: comment._id,
        name: comment.name,
        date: comment.date,
        avatar: comment.avatar,
        picture: comment.picture,
      };
    });
    dbComments.push(inputData);
    const updatedSpot = {
      ...this.currentSpot,
      comments: dbComments,
    };
    this.surfspotService.putSurfspot(updatedSpot).subscribe({
      next: data => {
        this.surfspotService.getSurfspots().subscribe({
          next: data => {
              this.surfspotService.changeSurfspots(data)
          }})
      },
      error: error => {
          alert('Nachricht konnte nicht versendet werden')
      }
  })

    this.commentText = ""
  }
}


