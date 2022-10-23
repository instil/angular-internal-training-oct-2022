import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Course} from '../../model/course';

@Component({
  selector: 'app-course-update-form',
  templateUrl: './course-update-form.component.html',
  styleUrls: ['./course-update-form.component.css']
})
export class CourseUpdateFormComponent {
  @Input() course!: Course;
  @Output() updateComplete = new EventEmitter<Course>();

  courseTypes = [
    {name: 'Beginner', value: 'BEGINNER'},
    {name: 'Intermediate', value: 'INTERMEDIATE'},
    {name: 'Advanced', value: 'ADVANCED'}
  ];

  name = 'CourseUpdateForm';

  updateCourse(): void {
    this.updateComplete.emit(this.course);
  }
}
