import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionComponent } from './fashion/fashion.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'fashions', component: FashionComponent },
  { path: 'fashion-new', component: FashionNewComponent },
  { path: 'fashion-detail', component: FashionDetailComponent },
  { path: 'fashion-delete', component: FashionDeleteComponent},
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  FashionComponent,
  FashionDetailComponent,
  FashionNewComponent,
  LoginComponent
];