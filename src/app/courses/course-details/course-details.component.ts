import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  // 2. make another property called selectedCourse
  // is this a field????
  selectedCourse;
  originalTitle;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  // 1. moving input down here to help break apart shared state
  // gonna put a setter here
  // before it was just course
  @Input() set course(value) {
    // as long as something is being passed in, we will do some logic
    if (value) {
      // can also do i think {...value}
      // the course is being passed in here
      // copying happens from r -> l
      // Object.assign({}, value, {title: 'blaj'})
      this.selectedCourse = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  }
}
