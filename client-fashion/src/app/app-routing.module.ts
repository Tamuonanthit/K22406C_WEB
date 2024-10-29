import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionClientComponent } from './fashion-client/fashion-client.component';
import { FashionClientDetailComponent } from './fashion-client-detail/fashion-client-detail.component';
import { FashionClientStyleComponent } from './fashion-client-style/fashion-client-style.component';

const routes: Routes = [
  { path: 'fashions/style', component: FashionClientComponent },
  { path: 'fashions/style/:style', component: FashionClientStyleComponent },
  { path: 'fashions/detail/:id', component: FashionClientDetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  FashionClientComponent,
];