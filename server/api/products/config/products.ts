import { Product } from "~/entities/product/model";

export const MOCK_PRODUCTS: Product[] = [{
  id: 1,
  images: [{
    src: "https://steamuserimages-a.akamaihd.net/ugc/1931506893351769772/52CC7C2E9AA09EAE62004F073EF60875E9D95037/",
    alt: "Картинка",
  }],
  title: 'Falchion Knife',
  oldPrice: 19,
  newPrice: 15,
  rating: 3
}
]
