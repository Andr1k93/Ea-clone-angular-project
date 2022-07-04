import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AsideComponent } from './layout/aside/aside.component';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopNavbarComponent,
    NavbarComponent,
    AsideComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HomeModule, SharedModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
