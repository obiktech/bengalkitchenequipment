export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  specifications: { [key: string]: string };
}

export type CategoryType = 'all' | 'cookware' | 'appliances' | 'gas-stoves' | 'utensils' | 'mixers';
