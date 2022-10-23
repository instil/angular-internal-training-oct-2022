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
  courseForUpdate: Course | null = null;

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

  courseChosenForUpdate(course: Course): void {
    this.courseForUpdate = {...course};

    // INTERESTING: What would happen if we did the line below instead?
    // this.courseForUpdate = course;
  }

  courseUpdated(course: Course): void {
    console.log('Updating ' + course.id);
    this.courseForUpdate = null;

    this.updateCourse(course);
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

  updateCourse(course: Course): void {
    const errorMsg = `Unable to update course ${course.id}`;
    this.coursesService.update(course)
      .subscribe(id => {
          this.status = `Course ${id} updated`;
          this.fetchAllCourses();
        },
        () => this.status = errorMsg
      );
  }
}
