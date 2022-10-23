import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'flights', loadChildren: () => import('../flights-viewer/flights-viewer.module').then(module => module.default)},
  {path: '', loadChildren: () => import('../home/home.module').then(module => module.default)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
