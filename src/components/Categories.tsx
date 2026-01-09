import { Card, CardContent } from './ui/card';
import type { CategoryType } from '../types/product';
import { categories }  from '../data/products';
interface CategoriesProps {
  onCategorySelect: (category:any) => void;
  selectedCategory: CategoryType;
}

export function Categories({ onCategorySelect, selectedCategory }: CategoriesProps) {


  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Browse by{' '}
            <span className="text-[#24C0FF]">
              Category
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of kitchen equipment organized by category.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;

            return (
              <Card
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  isSelected ? 'ring-2 ring-orange-600 shadow-lg' : ''
                }`}
              >
                <CardContent className="p-6 text-center space-y-3">
                  {/* Image Container */}
                  <div
                    className={`mx-auto w-35 h-35 rounded-full bg-gradient-to-br  flex items-center justify-center`}
                  >
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-full h-full object-contain transition-transform group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {/* {category.count} */}
                    </p>
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
