import localFont from 'next/font/local';

export const lotaGrotesque = localFont({
  src: [
    {
      path: './Los Andes  Lota Grotesque Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Los Andes  Lota Grotesque Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Los Andes  Lota Grotesque Semi Bold.otf',
      weight: '600',
      style: 'normal',
    }
  ],
  variable: '--font-lota-grotesque',
  display: 'swap',
}); 