import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';



@NgModule({
  declarations: [HomeComponent, MainContentComponent],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
