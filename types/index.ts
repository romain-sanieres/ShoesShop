export type RegisterFormType = {
  email: string;
  password: string;
};

export type ProductType = {
  name: string;
  description: string;
  price: number;
  collection?: string;
  tags: string;
  inventory: number;
  sku?: string;
};

export type CompanyFormType = {
  name: string;
  stripe: string;
  description: string;
};
