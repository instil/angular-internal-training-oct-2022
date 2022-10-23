import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuotesRowComponent} from './components/quotes-row/quotes-row.component';
import {QuotesEditorComponent} from './components/quotes-editor/quotes-editor.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes = [
  {path: '', component: QuotesEditorComponent}
];

@NgModule({
  declarations: [
    QuotesRowComponent,
    QuotesEditorComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export default class MemorableQuotesV3TestsModule {
}
