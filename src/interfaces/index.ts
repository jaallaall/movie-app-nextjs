export type Item = {
  id?: number | string;
  img: string;
  imgCover?: string;
  alt: string;
  title?: string;
  href?: string;
  category?: { genre?: string; triler?: string };
  rate: number;
};

export interface Option {
  label: string;
  value: string;
  children?: Option[];
}
