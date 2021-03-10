import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// this would be typically added to an environment config file
const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // add in prop called model, this will be an endpoint for the courses data model
  private model = 'courses';

  // he is setting courses to private, so that it can't be directly accessed, but can be done thru a method created below
  // "exposing thru a method"

  // this is being accessed thru the mock db
  // private courses = [
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
  //     description: 'he is really gassing wiljl',
  //     percentComplete: 44,
  //     favorite: true,
  //   },
  // ];

  // this is a service, and we can use the constructor to make http calls
  // need to inject httpClient
  constructor(private http: HttpClient) {}

  // typical operations being done on collection of items:

  // instead of read, give me all
  // over here he's modifying it to return a call instead of a list of courses that have been hardcoded
  // now that the base url has been declared, we can dynamically pass that in
  all() {
    // takes no params, returns everything
    // return this.courses;

    // this will make http call
    // it will return an observable
    // observables are like promises, but instead of getting one value, it gets many values
    return this.http.get(this.getUrl());
  }

  // give me one
  find(courseId) {
    // for (const course of this.courses){
    //   if (course.id === +courseId) return course
    // }
    // console.log('found courseid', courseId);

    return this.http.get(this.getId(courseId));
  }

  create(course) {
    // console.log('create course', course);

    // payload is being passed in
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    // console.log('update course', course);
    return this.http.put(this.getId(course.id), course);
  }

  delete(courseId) {
    // console.log('delete course', courseId);
    return this.http.delete(this.getId(courseId));
  }

  // if we need to modify a collection that is controlled or falls under application state vs ui state, then move that into a service

  // if pieces are being reused, then you can store them separately for re-use
  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getId(courseId) {
    return `${this.getUrl()}/${courseId}`;
  }
}
