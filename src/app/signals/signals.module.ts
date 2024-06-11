import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserinfoPageComponent } from './pages/userinfo-page/userinfo-page.component';
import { PropertiesPagesComponent } from './pages/properties-pages/properties-page.component';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserinfoPageComponent,
    PropertiesPagesComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }