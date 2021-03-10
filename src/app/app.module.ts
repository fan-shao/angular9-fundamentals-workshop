// these are es6 essential modules, language level
// this says, we are going to put all of this together in WEBPACK
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
// my imports
import { FormsModule } from '@angular/forms';
import { CoursesService } from './shared/services/courses.service';
import { LessonsService } from './shared/services/lessons.service';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { LessonsListComponent } from './courses/lessons/lessons-list/lessons-list.component';

// declarations are for components
// providers are for services

// this module defines the configuration of angular, framework level
// we need to tell angular here how to put the app together in a way to have it be performant
// includes things like lazy loading and tree-shaking
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    LessonsListComponent,
  ],
  providers: [CoursesService, LessonsService],
  // this component tells you what main component you want to render?
  bootstrap: [AppComponent],
})
export class AppModule {}
