import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GallaryComponent } from './gallary/gallary.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfounfdComponent } from './notfounfd/notfounfd.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"",redirectTo:"header",pathMatch:"full"},

  {path:"gallary",component:GallaryComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component: NotfounfdComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
