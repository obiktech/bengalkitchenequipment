import { Card, CardContent } from './ui/card';
import { ChefHat, Package, Star, MessageCircle } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Star,
      title: 'Quality First',
      description: 'We source only the finest kitchen equipment from trusted manufacturers to ensure durability and performance.'
    },
    {
      icon: ChefHat,
      title: 'Expert Guidance',
      description: 'Our team of kitchen equipment specialists provides personalized recommendations for your specific needs.'
    },
    {
      icon: Package,
      title: 'Wide Selection',
      description: 'From cookware to appliances, we offer an extensive range of products for every kitchen requirement.'
    },
    {
      icon: MessageCircle,
      title: 'Customer Support',
      description: 'Dedicated support team available to assist you with product selection and after-sales service.'
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1589109807644-924edf14ee09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njc2MDc3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About Bengal Kitchen"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">
                About <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Bengal Kitchen</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mb-6"></div>
            </div>

            <p className="text-muted-foreground">
              Welcome to Bengal Kitchen, your trusted partner in premium kitchen equipment solutions. With over 15 years of experience in the industry, we have been serving restaurants, hotels, and home kitchens across India with top-quality products.
            </p>

            <p className="text-muted-foreground">
              Our mission is to provide exceptional kitchen equipment that combines durability, functionality, and value. Whether you're setting up a new commercial kitchen or upgrading your home cooking space, we have the perfect solutions for you.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-orange-600 mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-orange-600 mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-orange-600 mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl mb-4">Why Choose Us</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We pride ourselves on delivering excellence in every aspect of our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
