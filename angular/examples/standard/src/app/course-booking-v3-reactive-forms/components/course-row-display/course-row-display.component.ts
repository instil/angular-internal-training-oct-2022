import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../../model/course';

@Component({
  // INTERESTING: Required parameters can be specified with the selector
  selector: '[app-course-row-display][course]',
  templateUrl: './course-row-display.component.html',
  styleUrls: ['./course-row-display.component.css']
})
export class CourseRowDisplayComponent {
  // INTERESTING: We can force the compiler to assume that this will be set with '!'
  @Input() course!: Course;
  @Output() courseSelected = new EventEmitter<Course>();
  @Output() courseDeleted = new EventEmitter<Course>();
  @Output() courseUpdated = new EventEmitter<Course>();

  selectCourse(): void {
    console.log('Course Selected');
    this.courseSelected.emit(this.course);
  }

  deleteCourse(): void {
    console.log('Course Deleted');
    this.courseDeleted.emit(this.course);
  }

  updateCourse(): void {
    console.log('Course Being Updated');
    this.courseUpdated.emit(this.course);
  }
}
