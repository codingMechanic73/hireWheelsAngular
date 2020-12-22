import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent],
  imports: [],
  exports: [NavBarComponent, FooterComponent]
})

export class SharedModule { }
