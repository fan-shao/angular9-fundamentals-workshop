import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})
export class LessonsListComponent {
  // i think he changes the names of the inputs and outputs to make it easier to differentiate
  // so he calles them lessons, selected
  @Input() courseLessons;
  @Input() title;
  @Input() currentLesson;
  @Output() selectLesson = new EventEmitter();
}
