import {Injectable, Injector} from '@angular/core';

@Injectable({
  // INTERESTING: We can inject directly on the class
  //              Possible values:
  //                'root'    :  application-level injector in most apps.
  //                'platform': A special singleton platform injector shared by all applications on the page.
  //                'any'     : Provides a unique instance in each lazy loaded module while all eagerly loaded modules share one instance.
  //                T         : A specific NgModule T
  providedIn: 'root'
})
export class LoggerService {
  constructor(private injector: Injector) {
    console.log('Instantiating LoggerService');
    console.log(injector);
  }

  log(message: any): void {
    console.log(message);
  }
}
