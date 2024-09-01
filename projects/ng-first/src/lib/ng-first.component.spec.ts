import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFirstComponent } from './ng-first.component';

describe('NgFirstComponent', () => {
  let component: NgFirstComponent;
  let fixture: ComponentFixture<NgFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
