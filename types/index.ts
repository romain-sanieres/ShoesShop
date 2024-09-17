export type RegisterFormType = {
  email: string;
  password: string;
};

export type CompanyFormType = {
  name: string;
  stripe: string;
  description: string;
};

export type ProductType = {
  name: string;
  description: string;
  price: string;
  collection?: string;
  tags?: string;
  inventory: string;
  stock_limit: string;
  sku: string;
};
