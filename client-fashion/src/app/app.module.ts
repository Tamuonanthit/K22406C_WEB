import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionClientComponent } from './fashion-client/fashion-client.component';
import { FashionClientDetailComponent } from './fashion-client-detail/fashion-client-detail.component';
import { FashionClientStyleComponent } from './fashion-client-style/fashion-client-style.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FashionClientComponent,
    FashionClientDetailComponent,
    FashionClientStyleComponent
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
