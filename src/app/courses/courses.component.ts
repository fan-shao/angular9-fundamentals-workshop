import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // we want to pick the selected course
  selectedCourse = null;
  selectedCourses = [];

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JS the hard parts',
      description: 'he is really gassing will',
      percentComplete: 44,
      favorite: true,
    },
  ];

  // when something is added in the constructor, it fires immediately
  // you have no control over when to initialize, it's harder to test
  constructor() {}

  // this is the most common lifecycle hook
  // fired when component is initialized, when all the bindings have been satisfied
  // best practice is when you're implementing life cycle hook, that you implement associated interface to the component
  // if you wait for async data you're binding to, you can say that the data is here when the component is initialized
  // initialization code goes into this lifecycle hook
  ngOnInit(): void {
    // so when this component is initialized, this function runs
    this.resetSelectedCourse();
  }

  // create a reset method
  resetSelectedCourse() {
    // create empty course
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };

    // every time this function is run, the selected course will reset back to an empty obj
    this.selectedCourse = emptyCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
    // this.selectedCourses.push(course)
  }

  saveCourse() {
    console.log('SAVE COURSE');
  }

  deleteCourse(course) {
    console.log('DELETED ID', course.id);
  }

  // cancel method
  cancel() {
    this.resetSelectedCourse();
  }
}
