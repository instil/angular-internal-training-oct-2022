import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Course} from '../model/course';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

// INTERESTING: Useful to break out communication to a service
@Injectable()
export class CoursesService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseServerUrl + '/courses/';
  }

  getAll(): Observable<Course[]> {
    return this.http
      .get<Course[]>(this.baseUrl);
  }

  get(id: string): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + id);
  }

  remove(id: string): Observable<string> {
    return this.http.delete(this.baseUrl + id, {responseType: 'text'});
  }

  update(course: Course): Observable<string> {
    return this.http.put(this.baseUrl + course.id, course, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      responseType: 'text'
    });
  }
}
