import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionAdminComponent } from './fashion-admin/fashion-admin.component';
import { FashionAdminDetailComponent } from './fashion-admin-detail/fashion-admin-detail.component';
import { FashionAdminCreateComponent } from './fashion-admin-create/fashion-admin-create.component';
import { FashionAdminUpdateComponent } from './fashion-admin-update/fashion-admin-update.component';
const routes: Routes = [
  { path: 'fashions', component: FashionAdminComponent },
  { path: 'fashions/new', component: FashionAdminCreateComponent },
  { path: 'fashions/edit/:id', component: FashionAdminUpdateComponent},
  { path: 'fashions/detail/:id', component: FashionAdminDetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  FashionAdminComponent
]