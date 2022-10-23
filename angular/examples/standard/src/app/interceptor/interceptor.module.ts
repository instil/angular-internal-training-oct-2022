import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InterceptorComponent} from './interceptor.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TokenInterceptor} from './token.interceptor';

const routes: Route[] = [
  {path: '', component: InterceptorComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    InterceptorComponent
  ],
  providers: [
    // INTERESTING: We can register multiple providers
    //              In this case Http Interceptors to intercept all HTTP requests.
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export default class InterceptorModule {
}
