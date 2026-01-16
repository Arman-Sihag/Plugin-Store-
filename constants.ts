import { Plugin } from './types';

export const AUTHOR_NAME = "Starboy";

export const MOCK_PLUGINS: Plugin[] = [
  {
    id: '1',
    title: 'Utopian House',
    description: 'A modern high-rise apartment building with integrated parking, designed for urban living. Perfect for your city simulations.',
    author: AUTHOR_NAME,
    sizeKB: 26960,
    publishDate: '25 October 2023',
    platform: 'Mediafire',
    inGameSize: '8x8',
    images: [
      'https://i.ibb.co/9v0z0L4/building-1.png'
    ],
    logo: 'https://i.ibb.co/9v0z0L4/building-1.png',
    category: 'Residential'
  },
];
