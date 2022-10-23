import {Component, Directive, EventEmitter} from '@angular/core';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

export function createComponentStub(selector: string,
                                    inputs: string[] = [],
                                    outputs: string[] = []) {
  // noinspection AngularMissingOrInvalidDeclarationInModule
  @Component({
    selector,
    template: '',
    // tslint:disable-next-line:use-input-property-decorator
    inputs,
    // tslint:disable-next-line:use-output-property-decorator
    outputs
  })
  class StubClassComponent {
    constructor() {
      outputs.forEach(x => {
        // @ts-ignore
        this[x] = new EventEmitter<any>();
      });
    }
  }

  return StubClassComponent;
}

export function createDirectiveStub(selector: string, keys: string[] = []) {
  // noinspection AngularMissingOrInvalidDeclarationInModule
  @Directive({
    selector,
    // tslint:disable-next-line:no-inputs-metadata-property
    inputs: keys
  })
  class StubClassDirective {
  }

  return StubClassDirective;
}

export function createServiceStub<T>(type: new(...params: any[]) => T, keys = Object.keys(type.prototype)): SpyObj<T> {
    return createSpyObj('testService', keys);
}

