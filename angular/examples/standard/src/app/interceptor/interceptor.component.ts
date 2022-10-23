import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent {
  token = '';

  constructor(private http: HttpClient) {
  }

  saveToken(): void {
    if (this.token) {
      localStorage.setItem('token', this.token);
    } else {
      localStorage.removeItem('token');
    }
  }

  readData(): void {
    this.http.get('assets/data/dummy.json')
      .subscribe(
        () => console.log('Successfully read data'),
        error => console.log('Error reading data: ' + JSON.stringify(error))
      );
  }
}
