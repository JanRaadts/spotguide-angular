import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-spot-social-comment',
  templateUrl: './spot-social-comment.component.html',
  styleUrls: ['./spot-social-comment.component.scss'],
  animations: [
    trigger('fadeIn',[
      transition(':enter', [
        style({ opacity: 0, transform: 'translate(-600px, 0)' }),
        animate('500ms', style({opacity: 1, transform: 'translate(0, 0)'}))
      ]),  
      transition(':leave', [
        style({ opacity: 1, transform: 'translate(0, 0)' }),
        animate('500ms', style({opacity: 0, transform: 'translate(-600px, 0)'}))
      ])
    ])
  ]
})
export class SpotSocialCommentComponent {

@Input() comment!: any

}
