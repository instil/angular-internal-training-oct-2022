import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {QuotesEditorComponent} from './components/quotes-editor/quotes-editor.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {QuotesRowComponent} from './components/quotes-row/quotes-row.component';
import {QuotesService} from './services/quotes.service';
import {QuotesServiceHttp} from './services/quotes.service.http';
import {StoreModule} from '@ngrx/store';
import {quotesReducer} from './reducers/quotes.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({quotes: quotesReducer})
  ],
  declarations: [
    QuotesEditorComponent,
    QuotesRowComponent
  ],
  providers: [
    {provide: QuotesService, useClass: QuotesServiceHttp}
  ],
  bootstrap: [
    QuotesEditorComponent
  ]
})
export class AppModule {
}
