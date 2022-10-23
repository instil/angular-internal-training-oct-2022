import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {GuardsHomeComponent} from './guards-home/guards-home.component';
import {AdminService} from './admin.service';
import {IsAdminGuard} from './is-admin.guard';
import {FormsModule} from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: GuardsHomeComponent,
    children: [
      {path: 'user', component: UserComponent},
      // INTERESTING: We can guard a route
      {path: 'admin', component: AdminComponent, canActivate: [IsAdminGuard]},
      {path: '**', redirectTo: 'user'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserComponent,
    AdminComponent,
    GuardsHomeComponent
  ],
  providers: [
    // INTERESTING: Can provide with simple type reference
    AdminService,
    IsAdminGuard
  ]
})
export default class GuardsModule {
}
