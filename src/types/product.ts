export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  specifications: { [key: string]: string };
}

export type CategoryType =
  | 'all'
  | 'cookware'
  | 'display-counters'
  | 'cooking-equipment'
  | 'bakery-equipment'
  | 'refrigeration'
  | 'pantry'
  | 'foodprocess'
  | 'washingequipment'
  | 'exhaust-system'
  | 'gas-stoves'
  | 'appliances';
