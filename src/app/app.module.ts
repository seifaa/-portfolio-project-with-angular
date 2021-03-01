import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NotfounfdComponent } from './notfounfd/notfounfd.component'


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    AboutComponent,
    GallaryComponent,
    NavigationbarComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    NotfounfdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
