import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';


const routes: Routes = [
  {
    path: 'home', component: MainContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
