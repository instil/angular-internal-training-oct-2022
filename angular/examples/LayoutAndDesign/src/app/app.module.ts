import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContainerComponent} from './components/bootstrap/container/container.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {HeadingsComponent} from './components/bootstrap/headings/headings.component';
import {FormsModule} from '@angular/forms';
import {GridComponent} from './components/bootstrap/grid/grid.component';
import {GridResponsiveComponent} from './components/bootstrap/grid-responsive/grid-responsive.component';
import {ShowSizeComponent} from './components/bootstrap/show-size/show-size.component';
import {ResponsiveClassesComponent} from './components/bootstrap/responsive-classes/responsive-classes.component';
import {MarginsPaddingComponent} from './components/bootstrap/margins-padding/margins-padding.component';
import {ButtonsComponent} from './components/bootstrap/buttons/buttons.component';
import {TablesComponent} from './components/bootstrap/tables/tables.component';
import {ExpanderComponent} from './components/material/expander/expander.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsComponent} from './components/material/forms/forms.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeadingsComponent,
    GridComponent,
    GridResponsiveComponent,
    ShowSizeComponent,
    ResponsiveClassesComponent,
    MarginsPaddingComponent,
    ButtonsComponent,
    TablesComponent,
    ExpanderComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
