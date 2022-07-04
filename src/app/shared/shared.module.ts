import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { GamesCardComponent } from './games-card/games-card.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { InfoComponent } from './info/info.component';
import { SocialContainerComponent } from './social-container/social-container.component';

@NgModule({
  declarations: [
    ButtonComponent,
    GamesCardComponent,
    NewsCardComponent,
    InfoComponent,
    SocialContainerComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    GamesCardComponent,
    InfoComponent,
    NewsCardComponent,
    SocialContainerComponent,
  ],
})
export class SharedModule {}
