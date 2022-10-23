import {Component, Input} from '@angular/core';
import {Course} from '../../model/course';

@Component({
  // INTERESTING: Required parameters can be specified with the selector
  selector: 'app-course-detail-viewer[course]',
  templateUrl: './course-detail-viewer.component.html',
  styleUrls: ['./course-detail-viewer.component.css']
})
export class CourseDetailViewerComponent {
  @Input() course!: Course;
}
