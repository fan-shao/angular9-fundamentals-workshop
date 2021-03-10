import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

// home component is a class
// it implements interface called OnInit
// this class has properties and methods
export class HomeComponent implements OnInit {
  // so i guess all the fields will go here
  title = 'hello workshop';

  currentLesson = null;

  // these are the properties
  // when props are available in your class, you can bind it to your template
  // go into html to bind it
  // courseLessons = [
  //   { title: 'Hello Angular' },
  //   { title: 'Component Fundamentals' },
  //   { title: 'Template Driven Forms' },
  //   { title: 'Angular Services' },
  //   { title: 'Server Communication' },
  //   { title: 'Component Driven Architecture' },
  //   { title: 'Angular Routing' },
  //   { title: 'Unit Testing Fundamentals' },
  // ];

  courseLessons = null;

  // method 1
  // if private is taken off of lesson service, then the arg doesn't exist in the home component
  // private for some reason adds it as a member of the class
  constructor(private lessonsService: LessonsService) {}

  // method 2
  // when component loads, we want to be able to access the injected els
  ngOnInit(): void {
    this.courseLessons = this.lessonsService.all();
  }

  // deleted template logic for this
  // updateColor(){
  //   console.log('update color, whioop whoop')
  //   this.themeColor = 'salmon'
  // }

  // have a string that is currently null, but when the lesson is selected, the variable will change
  selectLesson(lesson) {
    this.currentLesson = lesson;
    console.log(this.currentLesson);
  }
}

// services exercise
/**
 * create lessons service
 * add lessons service to app module
 * inject lessons service into component
 * move lessons to service and consume in component
 */
