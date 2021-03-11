import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesService } from '../shared/services/courses.service';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  // gotta import the debug here too
  let de: DebugElement;
  // we need a reference to the service we're going to call (for the delete)
  // then go to synchronous block
  // i guess over here we're saying the coursesServices should have a shape like CoursesService???
  let coursesService: CoursesService;

  // when we are unit testing, we don't have to make external calls to check if something is working
  // this is where mocks and stubs come in
  // before in the async cb i had this:
  // here we can import httpclient to use in test
  // imports: [HttpClientModule],

  // the coursescomponent relies on the coursecomponentSERVICE
  // so we can create a stub for the service

  // stub
  // he got an error saying the function.all() method doesn't exist but i didn't get the same msg...??
  const coursesServiceStub = {
    // non-operational function
    // http call returns something you have to subscribe to
    // calling all is supposed to return an obj, that you can call subscribe on
    all: () => {
      return { subscribe: () => {} };
    },
    // delete had an error so he put delete in here, but why??? this is a stub, but he did a spy on courseServices, so why do we need this here???
    // he said we're stubbing, and layering over with a spy
    // what this mean, idk, gotta look it up
    // something about overriding a service dependency by mockingg a stub with the exact amount of functionality needed
    // if there's 20 methods in a service, but component uses 2, then you just mock those 2 (stubbing what you use)
    // he didn't stub delete until he called it in the last test
    delete: () => {
      return { subscribe: () => {} };
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      // i want to privde to this module
      // instead of using real courses, he wanted to usevalue the stub
      // so i guess this mean, the provider is the service, but we will use this to stub that service instead
      // when checking jasmine, it will say that subscribe is undefined, so you keep stubbing accordingly.
      providers: [{ provide: CoursesService, useValue: coursesServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    // put debug el in here
    de = fixture.debugElement;
    // get a reference to the service using the debug element injector
    // now that we have it, we can reference it in the delete test case
    coursesService = de.injector.get(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // here we are testing the delete functionality
  // we want to validate this:
  it('should call courseService.delete on delete', () => {
    // we are going to spy on the service and make sure that the method was called with the correct parameter
    // we are going to spy
    spyOn(coursesService, 'delete').and.callThrough();
    component.deleteCourse(1);
    expect(coursesService.delete).toHaveBeenCalledWith(1);
  });
});
