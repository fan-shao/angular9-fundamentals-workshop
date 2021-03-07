import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// home component is a class
// it implements interface called OnInit
// this class has properties and methods
export class HomeComponent implements OnInit {
  // so i guess all the fields will go here
  title = 'hello workshop'

  currentLesson = null

  // these are the properties
  // when props are available in your class, you can bind it to your template
  // go into html to bind it
  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  // method 1
  constructor() { }

  // method 2
  ngOnInit(): void {
  }

  // deleted template logic for this
  // updateColor(){
  //   console.log('update color, whioop whoop')
  //   this.themeColor = 'salmon'
  // }

  // have a string that is currently null, but when the lesson is selected, the variable will change
  selectLesson(lesson){
    this.currentLesson = lesson
    console.log(this.currentLesson)
  }

}
