import {Injectable} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {MonoTypeOperatorFunction} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class BusyService {
  private busyCount = 0;

  busyOp<T>(): MonoTypeOperatorFunction<T> {
    this.busyCount++;
    return finalize(() => this.busyCount--);
  }

  get isBusy(): boolean {
    return this.busyCount > 0;
  }
}
