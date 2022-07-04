import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { FooterBannerComponent } from './components/footer-banner/footer-banner.component';
import { GamesComponent } from './components/games/games.component';
import { NewsComponent } from './components/news/news.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    GamesComponent,
    FooterBannerComponent,
    HeaderBannerComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, NgbModule],
  exports: [HomeComponent],
})
export class HomeModule {}
