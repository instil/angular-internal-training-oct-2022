import {NgModule} from '@angular/core';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';
import {CourseDetailViewerComponent} from './components/course-detail-viewer/course-detail-viewer.component';
import {CourseRowDisplayComponent} from './components/course-row-display/course-row-display.component';
import {CoursesService} from './services/course.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Route, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CourseUpdateFormComponent} from './components/course-update-form/course-update-form.component';

const routes: Route[] = [
  {path: '', component: CourseViewerComponent},
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CourseViewerComponent,
    CourseDetailViewerComponent,
    CourseRowDisplayComponent,
    CourseUpdateFormComponent
  ],
  providers: [
    CoursesService
  ]
})
export default class CourseBookingV2Module {
}
