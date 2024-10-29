import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionAdminComponent } from './fashion-admin/fashion-admin.component';
import { FashionAdminCreateComponent } from './fashion-admin-create/fashion-admin-create.component';
import { FashionAdminUpdateComponent } from './fashion-admin-update/fashion-admin-update.component';
import { FashionAdminDeleteComponent } from './fashion-admin-delete/fashion-admin-delete.component';
import { FashionAdminDetailComponent } from './fashion-admin-detail/fashion-admin-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FashionAdminComponent,
    FashionAdminCreateComponent,
    FashionAdminUpdateComponent,
    FashionAdminDeleteComponent,
    FashionAdminDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
