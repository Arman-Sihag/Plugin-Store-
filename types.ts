export interface Plugin {
  id: string;
  title: string;
  description: string;
  author: string;
  sizeKB: number;
  publishDate: string;
  platform: string;
  inGameSize: string; // e.g., "4x4", "1x1"
  images: string[];
  logo: string;
  category: string;
}

export type ViewState = 'shelf' | 'detail';

export type Theme = 'light' | 'dark';

export type SortBy = 'date' | 'size';
