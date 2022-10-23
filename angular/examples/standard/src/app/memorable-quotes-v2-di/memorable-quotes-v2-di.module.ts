import {inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuotesRowComponent} from './components/quotes-row/quotes-row.component';
import {QuotesEditorComponent} from './components/quotes-editor/quotes-editor.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {INITIAL_QUOTE_TOKEN, INITIAL_SOURCE_TOKEN, INJECTION_COUNT_TOKEN, QUOTES_SERVICE} from './tokens';
import {QuotesServiceHttp} from './services/quotes.service.http';
import {LoggerService} from './services/logger.service';

const routes = [
  {path: '', component: QuotesEditorComponent}
];

@NgModule({
  declarations: [
    QuotesRowComponent,
    QuotesEditorComponent
  ],
  // INTERESTING: The providers section allows us to control dependency injection at the module level
  providers: [
    // INTERESTING: For interface, we need to create injection tokens
    {provide: QUOTES_SERVICE, useClass: QuotesServiceHttp},

    // INTERESTING: There are lots of ways to provide
    // QuotesServiceHttp, // Using the type directly

    // Use tokens for values
    {provide: INITIAL_QUOTE_TOKEN, useValue: 'Sample Quote'},
    {provide: INITIAL_SOURCE_TOKEN, useValue: 'Sample Source'},

    // Using factory
    // {provide: QUOTES_SERVICE, useFactory: () => new QuotesServiceHttp(inject(HttpClient), inject(LoggerService))},
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MemorableQuotesV2DiModule {
}
