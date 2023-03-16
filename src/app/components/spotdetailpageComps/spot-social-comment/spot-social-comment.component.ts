import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spot-social-comment',
  templateUrl: './spot-social-comment.component.html',
  styleUrls: ['./spot-social-comment.component.scss']
})
export class SpotSocialCommentComponent {

@Input() comment!: any

}
