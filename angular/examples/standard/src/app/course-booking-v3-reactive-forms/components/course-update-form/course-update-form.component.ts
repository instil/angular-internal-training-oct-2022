import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../model/course';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {filter} from 'rxjs/operators';

interface FormData {
  courseId: string;
  courseTitle: string;
  courseDifficulty: string;
  courseDuration: number;
}

function customDifficultyValidator(value: AbstractControl): ValidationErrors | null {
  const currentValue = value.value;
  if (currentValue === 'BEGINNER' || currentValue === 'INTERMEDIATE' || currentValue === 'ADVANCED') {
   return null;
  }

  return {diffulty: 'Difficulty doesn\'t have a valid value'};
}

@Component({
  selector: 'app-course-update-form',
  templateUrl: './course-update-form.component.html',
  styleUrls: ['./course-update-form.component.css']
})
export class CourseUpdateFormComponent implements OnInit {
  updateForm: FormGroup;
  @Input() course!: Course;
  @Output() updateComplete = new EventEmitter<Course>();

  courseTypes = [
    {name: 'Beginner', value: 'BEGINNER'},
    {name: 'Intermediate', value: 'INTERMEDIATE'},
    {name: 'Advanced', value: 'ADVANCED'}
  ];

  constructor(private formBuilder: FormBuilder) {
    // INTERESTING: Setup up Form objects in constructor
    //              We could also use inputs to derive the form and place in ngOnInit
    this.updateForm = formBuilder.group({
      courseId: ['', Validators.required],
      courseTitle: ['', Validators.required],
      courseDifficulty: ['', Validators.compose([
        Validators.required,
        customDifficultyValidator
      ])],
      courseDuration: [0, Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ])]
    });
  }

  ngOnInit(): void {
    this.updateFromModel(this.course);

    // This is unnecessary but demonstrates the capability
    this.updateForm
      .valueChanges // INTERESTING: We can subscibe to updates on the form
      .pipe(
        filter(values => this.updateForm.valid)
      )
      .subscribe((values: FormData) => {
        console.log('Updating course object via Observable');
        // INTERESTING: Values within forms of type any. We can explicitly specify the type
        //              We could also use a library such as @rxweb/types
        this.updateToModel(values);
      });
  }

  private updateToModel(values: FormData): void {
    this.course.id = values.courseId;
    this.course.title = values.courseTitle;
    this.course.difficulty = values.courseDifficulty;
    this.course.duration = values.courseDuration;
  }

  private updateFromModel(course: Course): void {
    this.updateForm.setValue({
      courseId: course.id,
      courseTitle: course.title,
      courseDifficulty: course.difficulty,
      courseDuration: course.duration
    });
  }

  updateCourse(): void {
    this.updateComplete.emit(this.course);
  }
}
