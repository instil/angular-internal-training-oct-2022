import {Component, OnInit, Output} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../../services/course.service';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  courseBeingUpdated = false;
  selectedCourse: Course | null = null;
  courses: Course[] = [];

  status = '';

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.fetchAllCourses();
  }

  courseSelected(course: Course): void {
    console.log('Selecting ' + course.id);
    this.selectedCourse = course;
  }

  courseDeleted(course: Course): void {
    console.log('Deleting ' + course.id);
    this.selectedCourse = null;
    this.deleteCourse(course.id);
  }

  private fetchAllCourses(): void {
    this.coursesService
      .getAll()
      .subscribe(
        courses => this.courses = courses,
        () => this.status = 'Unable to fetch courses'
      );
  }

  private deleteCourse(courseId: string): void {
    const errorMsg = `Unable to delete course ${courseId}`;
    this.coursesService
      .remove(courseId)
      .subscribe(
        () => {
          this.status = `Course ${courseId} deleted`;
          this.fetchAllCourses();
        },
        () => this.status = errorMsg
      );
  }
}
