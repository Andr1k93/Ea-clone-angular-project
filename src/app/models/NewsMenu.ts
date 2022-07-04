export interface NewsMenu {
  id: number;
  title: string;
  category: NewsCategory;
}

export enum NewsCategory {
  electronicArts = 'Electronic Arts',
  madden = 'Madden NFL',
  apex = 'Apex Legends',
  fifa = 'FIFA',
  battlefield = 'Battledield',
  sims = 'The Sims 4',
  f1 = 'F1 2021',
  inside = 'Inside EA',
  play = 'EA Play',
  news = 'Notizie EA',
}
