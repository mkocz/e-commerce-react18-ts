export type ProductDto = {
  id: number;
  fields: {
    name: string;
    description: string;
    price: number;
    img?: ImageType[];
  };
  quantity?: number;
  totalPrice?: number;
};

type ImageType = {
  url: string;
  thumbnails: {
    large: {
      url: string;
    };
  };
};
