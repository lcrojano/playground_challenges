import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDescriptionComponent } from './tasks-description.component';

describe('TasksDescriptionComponent', () => {
  let component: TasksDescriptionComponent;
  let fixture: ComponentFixture<TasksDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
