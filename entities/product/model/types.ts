export interface Product {
  id: number;
  images: Images[];
  title: string;
  oldPrice: number;
  newPrice: number;
  rating: number;
}

export interface Images {
  src: string;
  alt: string;
}
