import type { Product } from '../types/product';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const handleGetQuote = () => {
    const message = `Hi, I'm interested in getting a quote for ${product.name}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919775414426?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 right-4 bg-orange-600">
          {product.category.replace('-', ' ')}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </Button>
        <Button
          className="flex-1 bg-green-600 hover:bg-green-700"
          onClick={handleGetQuote}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Get Quote
        </Button>
      </CardFooter>
    </Card>
  );
}
