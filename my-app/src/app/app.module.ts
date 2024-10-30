import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponents  } from './app-routing.module';
import { AppComponent } from './app.component';

import { FashionComponent } from './fashion/fashion.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FashionComponent,
    FashionNewComponent,
    FashionDetailComponent,
    FashionDeleteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
