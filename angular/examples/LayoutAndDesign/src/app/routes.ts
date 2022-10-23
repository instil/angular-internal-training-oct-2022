import {Route, Routes} from '@angular/router';
import {ContainerComponent} from './components/bootstrap/container/container.component';
import {HeadingsComponent} from './components/bootstrap/headings/headings.component';
import {GridComponent} from './components/bootstrap/grid/grid.component';
import {GridResponsiveComponent} from './components/bootstrap/grid-responsive/grid-responsive.component';
import {ResponsiveClassesComponent} from './components/bootstrap/responsive-classes/responsive-classes.component';
import {MarginsPaddingComponent} from './components/bootstrap/margins-padding/margins-padding.component';
import {ButtonsComponent} from './components/bootstrap/buttons/buttons.component';
import {TablesComponent} from './components/bootstrap/tables/tables.component';
import {ExpanderComponent} from './components/material/expander/expander.component';
import {FormsComponent} from './components/material/forms/forms.component';

export type LabeledRoute = Route & { label: string };

export const bootstrapRoutes: LabeledRoute[] = [
  {path: 'container', label: 'Containers', component: ContainerComponent},
  {path: 'headings', label: 'Headings', component: HeadingsComponent},
  {path: 'margin-padding', label: 'Margins and Padding', component: MarginsPaddingComponent},
  {path: 'grid', label: 'The Grid System', component: GridComponent},
  {path: 'grid-responsive', label: 'Responsive Grid System', component: GridResponsiveComponent},
  {path: 'responsive-classes', label: 'Other Responsive Classes', component: ResponsiveClassesComponent},
  {path: 'buttons', label: 'Buttons', component: ButtonsComponent},
  {path: 'tables', label: 'Tables', component: TablesComponent},
];

export const materialRoutes: LabeledRoute[] = [
  {path: 'expansion', label: 'Expansion Panels', component: ExpanderComponent},
  {path: 'forms', label: 'Forms', component: FormsComponent},
];

export const routes: Routes = [
  {path: 'bootstrap', children: bootstrapRoutes},
  {path: 'material', children: materialRoutes}
];


