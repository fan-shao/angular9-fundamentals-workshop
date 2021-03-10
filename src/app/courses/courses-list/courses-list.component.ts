import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})

// deleted event hook oninit bc it's not needed (???)
// and constructor isn't needed so, that's deleted also

// this is called a PRESENTATION COMPONENT
// it's sole purpose is to consume data via bindings
// if an event happens, it delegates it back up instead of handling it

// this is a functional component
// how to unit test?
// he wouldn't test it bc there's no logic to test
export class CoursesListComponent {
  // set courses to an empty array
  // we want to render courses
  // we are going to put the courses into the courses array via input decorator
  // this is a method
  // the courses are being put into this child component
  // these are properties you are taking in
  @Input() courses;

  // custom events can be generated using output
  // output event called selected is going to be created
  // selected is going to be an event emitter, so it needs to be instantiated
  // BE CAREFUL, MAKE SURE YOU'RE GETTING THE EVENT EMITTER FROM ANGULAR CORE, BC IT CAN BE IMPORTED FROM LOTS OF DIFFERENT LIBRARIES
  // i guess every time you want to create a new emitter, you have to add a new decorator
  // so this is done bc we don't want the child component to be responsible for the events, want to delegate it to the parent component, and this is how we are passing that reponsibility
  // go back to the template (child)
  // when the user clicks, the emit will be captured
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
