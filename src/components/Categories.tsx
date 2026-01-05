import { ChefHat, Package, UtensilsCrossed } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import type { CategoryType } from '../types/product';

interface CategoriesProps {
  onCategorySelect: (category: CategoryType) => void;
  selectedCategory: CategoryType;
}

export function Categories({ onCategorySelect, selectedCategory }: CategoriesProps) {
  const categories = [
    {
      id: 'all' as CategoryType,
      name: 'All Products',
      icon: Package,
      color: 'from-blue-500 to-blue-600',
      count: 'View All'
    },
    {
      id: 'cookware' as CategoryType,
      name: 'Cookware',
      icon: ChefHat,
      color: 'from-orange-500 to-orange-600',
      count: 'Pots & Pans'
    },
    {
      id: 'appliances' as CategoryType,
      name: 'Appliances',
      icon: Package,
      color: 'from-purple-500 to-purple-600',
      count: 'Modern Tech'
    },
    {
      id: 'gas-stoves' as CategoryType,
      name: 'Gas Stoves',
      icon: UtensilsCrossed,
      color: 'from-red-500 to-red-600',
      count: 'High Power'
    },
    {
      id: 'utensils' as CategoryType,
      name: 'Utensils',
      icon: UtensilsCrossed,
      color: 'from-green-500 to-green-600',
      count: 'Essential Tools'
    },
    {
      id: 'mixers' as CategoryType,
      name: 'Mixers & Grinders',
      icon: Package,
      color: 'from-teal-500 to-teal-600',
      count: 'Powerful Motors'
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Browse by <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of kitchen equipment organized by category. Find exactly what you need for your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  isSelected ? 'ring-2 ring-orange-600 shadow-lg' : ''
                }`}
                onClick={() => onCategorySelect(category.id)}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.count}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
