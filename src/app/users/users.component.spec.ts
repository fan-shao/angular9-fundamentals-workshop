import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  // this is the fixture that creates and returns instance of component for testing
  let fixture: ComponentFixture<UsersComponent>;
  // another piece to add: debugging
  let de: DebugElement;
  // BLOCK 1
  // testbed - creating environment for test to run
  // most important when testing angular components
  // sets up controlled environment
  beforeEach(async(() => {
    // this allows you to create a very specific module that you can run or test component in
    // this block is going to run before each of your tests
    // setting up angular module for component/service to live in so it can be tested
    TestBed.configureTestingModule({
      // i want to declare this userscomponent
      declarations: [UsersComponent],
      // now that a component is configured, we need a fixture
      // fixture creates instance of component to test
      // returns instance of test fixture, and we can access that component
    })
      // here we are saying, once the testing module have been fixed, compile all the instances of the components returned
      .compileComponents();
  }));

  // BLOCK 2
  beforeEach(() => {
    // returns test bed with instance of the component in an accessible test bed
    // fixture is a component fixture with a user component in it
    fixture = TestBed.createComponent(UsersComponent);
    // we can access the component by calling fixture.componentInstance
    // now we have an instance of this component, it can not be utilized
    // it allows for us to create a component in isolation
    component = fixture.componentInstance;
    // we are going to add the debugging el here, checks angular html syntax under the hood
    // we can use de to query the template of the component
    de = fixture.debugElement;
    // in testing environment, change detection is not automatic, because they want to give you as much control over how much you want to ste[ thru your app, so you need to force the fixture to check for changes
    // you need this to test the template on change, and it needs to be run before each
    fixture.detectChanges();
  });

  // WHY ARE THERE 2 BEFORE EACH BLOCKS???
  // the first is async, if you're pulling templates into a testing component, that is remote, need to give environment time to make those calls
  // BUT WHAT DOES HE MEAN BY REMOTE TEMPLATES, WHERE ARE THEY GONNA BE COMING FROM
  // the second is synchronous calls

  it('should have the correct title', () => {
    expect(component.title).toBe('HELLO ASS WIPE');
  });

  it('should render the correct title', () => {
    // we need to capture something here
    // we're checking template
    // need to reference h1 tag in template
    // By class allows us to query the debug element in several different ways, one is by css
    // need to be careful with the by import
    const h1 = de.query(By.css('h1'));
    // now that we have a reference to the h1
    // if we test like this, the component title of dick dick dick will stay like this unless you force the fixture to re-render
    expect(h1.nativeElement.innerText).toBe('HELLO ASS WIPE');
    component.title = 'DICK DICK DICK';
    fixture.detectChanges();
    expect(h1.nativeElement.innerText).toBe('DICK DICK DICK');
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
