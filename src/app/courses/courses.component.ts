import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // we want to pick the selected course
  selectedCourse = null;
  // selectedCourses = [];

  // this is added after the dependency injection
  courses = null;

  // if this courses array is going to be shared between components, it needs to be converted into a service
  // courses = [
  //   {
  //     id: 1,
  //     title: 'Angular 9 Fundamentals',
  //     description: 'Learn the fundamentals of Angular 9',
  //     percentComplete: 26,
  //     favorite: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'JS the hard parts',
  //     description: 'he is really gassing will',
  //     percentComplete: 44,
  //     favorite: true,
  //   },
  // ];

  // when something is added in the constructor, it fires immediately
  // you have no control over when to initialize, it's harder to test
  // the course services component is going to be injected in here
  // dependency injection happens in the constructor as a param
  constructor(private coursesService: CoursesService) {}

  // this is the most common lifecycle hook
  // fired when component is initialized, when all the bindings have been satisfied
  // best practice is when you're implementing life cycle hook, that you implement associated interface to the component
  // if you wait for async data you're binding to, you can say that the data is here when the component is initialized
  // initialization code goes into this lifecycle hook
  ngOnInit(): void {
    // so when this component is initialized, this function runs
    this.resetSelectedCourse();
    // this is added after dependency injection
    // this is pulling in the courses arr from the course service doc
    // instead of this.coursesService.courses being stored in this.courses, we're gonna have it store the result of this.coursesService.all()
    // this.courses = this.coursesService.all();

    // this.coursesServices.all is an observable (like a promise), which also needs to be resolved
    // we sort of need this for hydration after creating post
    // this.coursesService.all().subscribe((courses) => (this.courses = courses));

    this.loadCourses();
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

  // create a load courses method (this is taken from ngoninit
  loadCourses() {
    this.coursesService.all().subscribe((courses) => (this.courses = courses));
  }

  saveCourse(course) {
    // how do we know if this is a new or old course?
    // all we have to do is check the course id
    // instead of handling the state in here, it is being delegated to the service

    // since an http request is being made, we need to make sure that they subscribe and resolve the subscription
    // initially when subscribing, he wants to see what the data is
    if (course.id) {
      this.coursesService.update(course).subscribe(() => this.refreshCourses());
    } else {
      this.coursesService.create(course).subscribe(() => {
        this.refreshCourses();
      });
    }
  }

  // if there's no return, you don't have to provide a cb when subscribing
  // must subscribe to initiate the request
  deleteCourse(courseId) {
    this.coursesService.delete(courseId).subscribe(() => this.loadCourses());
  }

  // cancel method
  cancel() {
    this.resetSelectedCourse();
  }

  // he said whenever the course updates, you can just reset it in the selectcourse method, but that violates the single principle, where one function does one action
  // so he's going to create a composition method
  // i just added the reset to the component html file, i guess that's not the way to go.....
  // this is a transition step
  // and instead of just loading the courses after crud performances,  it will reset everything and then load
  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
  }
}
