import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-background dark:from-orange-950/20">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
              <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                Premium Kitchen Equipment
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              <span className="block">Equip Your Kitchen</span>
              <span className="block text-[#24C0FF]">
                For Success
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Discover premium kitchen equipment and appliances designed for both professional chefs and home cooking enthusiasts. Quality you can trust, prices you'll love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => onNavigate('products')}
                className="bg-[#24C0FF] text-black hover:text-white hover:from-orange-700 hover:to-red-700"
              >
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('contact')}
              >
                Contact Us
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div>
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">100+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589109807644-924edf14ee09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njc2MDc3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Kitchen Equipment"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background border rounded-xl p-6 shadow-lg hidden md:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold">Quality Assured</div>
                  <div className="text-sm text-muted-foreground">Premium Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
