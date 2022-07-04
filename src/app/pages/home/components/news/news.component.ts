import { NewsCategory, NewsMenu } from './../../../../models/NewsMenu';
import { New } from './../../../../models/New';

import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ea-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  menus: NewsMenu[] = [
    {
      id: 0,
      title: NewsCategory.news,
      category: NewsCategory.news,
    },
    {
      id: 1,
      title: NewsCategory.play,
      category: NewsCategory.play,
    },
    {
      id: 2,
      title: NewsCategory.madden,
      category: NewsCategory.madden,
    },
    {
      id: 3,
      title: NewsCategory.apex,
      category: NewsCategory.apex,
    },
    {
      id: 4,
      title: NewsCategory.fifa,
      category: NewsCategory.fifa,
    },
    {
      id: 5,
      title: NewsCategory.battlefield,
      category: NewsCategory.battlefield,
    },
    {
      id: 6,
      title: NewsCategory.sims,
      category: NewsCategory.sims,
    },
    {
      id: 7,
      title: NewsCategory.f1,
      category: NewsCategory.f1,
    },
    {
      id: 8,
      title: NewsCategory.inside,
      category: NewsCategory.inside,
    },
  ];

  @Output() news: New[] = [];
  newsData: New[] = [
    {
      id: 87,
      title: 'Titolo',
      category: 'Electronic Arts',
      date: new Date('02-02-2022'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem officiis distinctio. Modi cum nulla cupiditate non sed atque quisquam.',
      image:
        'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/prime-gaming-bundle-mad-maggie-chaotic-coral--/apex-s5drop6-social-twitch-1920x1080.jpg.adapt.crop16x9.431p.jpg',
    },
    {
      id: 88,
      title: 'Titolo',
      category: 'Apex Legends',
      date: new Date('02-02-2022'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem officiis distinctio. Modi cum nulla cupiditate non sed atque quisquam.',
      image:
        'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/prime-gaming-bundle-mad-maggie-chaotic-coral--/apex-s5drop6-social-twitch-1920x1080.jpg.adapt.crop16x9.431p.jpg',
    },
    {
      id: 89,
      title: 'Titolo',
      category: 'Electronic Arts',
      date: new Date('02-02-2022'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem officiis distinctio. Modi cum nulla cupiditate non sed atque quisquam.',
      image:
        'https://media.contentapi.ea.com/content/dam/ea/madden-nfl/madden-nfl-22/john-madden/common/m22-thankscoach-thumbnail.jpg.adapt.crop16x9.431p.jpg',
    },
    {
      id: 90,
      title: 'Titolo',
      category: 'F1 2021',
      date: new Date('02-02-2022'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem officiis distinctio. Modi cum nulla cupiditate non sed atque quisquam.',
      image:
        'https://media.contentapi.ea.com/content/dam/eacom/images/2022/01/ea-star-wars-featured-image-web.png.adapt.crop16x9.431p.png',
    },
    {
      id: 91,
      title: 'Titolo',
      category: 'The Sims 4',
      date: new Date('02-02-2022'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem officiis distinctio. Modi cum nulla cupiditate non sed atque quisquam.',
      image:
        'https://media.contentapi.ea.com/content/dam/news/ea-play-subscription/images/2021/03/ea-image-210316-game-pass-article-eaonlycore-16x9.jpg.adapt.crop16x9.431p.jpg',
    },
    {
      id: 89,
      title: 'Titolo',
      category: 'Inside EA',
      date: new Date('02-02-2022'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem officiis distinctio. Modi cum nulla cupiditate non sed atque quisquam.',
      image:
        'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/prime-gaming-bundle-mad-maggie-chaotic-coral--/apex-s5drop6-social-twitch-1920x1080.jpg.adapt.crop16x9.431p.jpg',
    },
    {
      id: 89,
      title: 'Titolo',
      category: 'EA Play',
      date: new Date('02-02-2022'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem officiis distinctio. Modi cum nulla cupiditate non sed atque quisquam.',
      image:
        'https://media.contentapi.ea.com/content/dam/eacom/common/ea-tile-origin-experience.png.adapt.crop16x9.431p.png',
    },
    {
      id: 89,
      title: 'Titolo',
      category: 'Notizie EA',
      date: new Date('02-02-2022'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem officiis distinctio. Modi cum nulla cupiditate non sed atque quisquam.',
      image:
        'https://media.contentapi.ea.com/content/dam/eacom/common/ea-tile-origin-experience.png.adapt.crop16x9.431p.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.news = this.orderNews(this.newsData).slice(0, 6);
  }

  filterNews(title: string): void {
    if (title != NewsCategory.news)
      this.news = this.orderNews(this.newsData)
        .filter((element) => element.category === title)
        .sort()
        .slice(0, 6);
    else this.news = this.orderNews(this.newsData).slice(0, 6);
  }

  orderNews(list: New[]) {
    return list.sort((a, b) => b.id - a.id);
  }
}
