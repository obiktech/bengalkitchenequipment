import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Professional Gas Stove - 4 Burner',
    category: 'gas-stoves',
    description: 'Heavy-duty commercial 4 burner gas stove perfect for restaurant kitchens and high-volume cooking.',
    image: 'https://images.unsplash.com/photo-1728976224749-f50c07a48603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZ2FzJTIwc3RvdmV8ZW58MXx8fHwxNzY3NjIwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'High-efficiency burners',
      'Stainless steel construction',
      'Easy to clean surface',
      'Adjustable flame control',
      'Commercial grade quality'
    ],
    specifications: {
      'Material': 'Stainless Steel',
      'Number of Burners': '4',
      'Dimensions': '36" x 24" x 12"',
      'BTU Output': '120,000 BTU/hr',
      'Warranty': '2 Years'
    }
  },
  {
    id: 2,
    name: 'Premium Stainless Steel Cookware Set',
    category: 'cookware',
    description: 'Complete cookware set with premium stainless steel construction for professional and home use.',
    image: 'https://images.unsplash.com/photo-1765959990052-fab57c043979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMGNvb2t3YXJlfGVufDF8fHx8MTc2NzYyMDA1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      '10-piece complete set',
      'Mirror-polished finish',
      'Heat-resistant handles',
      'Compatible with all cooktops',
      'Dishwasher safe'
    ],
    specifications: {
      'Material': '18/10 Stainless Steel',
      'Set Includes': '10 Pieces',
      'Base Type': 'Tri-ply',
      'Handle Material': 'Riveted Stainless Steel',
      'Warranty': '5 Years'
    }
  },
  {
    id: 3,
    name: 'Commercial Mixer Grinder - 1000W',
    category: 'mixers',
    description: 'Powerful 1000W mixer grinder for heavy-duty grinding and mixing tasks in commercial kitchens.',
    image: 'https://images.unsplash.com/photo-1672209962122-4e38cd353163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwbWl4ZXIlMjBncmluZGVyfGVufDF8fHx8MTc2NzYyMDA1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      '1000W powerful motor',
      'Multiple speed settings',
      '3 stainless steel jars',
      'Overload protection',
      'Anti-slip feet'
    ],
    specifications: {
      'Power': '1000 Watts',
      'Speed Settings': '3 Speed + Pulse',
      'Jar Capacity': '1.5L, 1L, 0.5L',
      'Voltage': '220-240V',
      'Warranty': '2 Years'
    }
  },
  {
    id: 4,
    name: 'Professional Kitchen Equipment Set',
    category: 'appliances',
    description: 'Complete professional kitchen equipment for commercial use with modern technology and efficiency.',
    image: 'https://images.unsplash.com/photo-1589109807644-924edf14ee09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njc2MDc3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Energy efficient design',
      'Professional grade',
      'Easy maintenance',
      'Durable construction',
      'High capacity'
    ],
    specifications: {
      'Type': 'Multi-purpose',
      'Material': 'Stainless Steel',
      'Power Supply': 'Electric',
      'Capacity': 'Industrial',
      'Warranty': '3 Years'
    }
  },
  {
    id: 5,
    name: 'Premium Kitchen Utensils Set',
    category: 'utensils',
    description: 'Professional-grade kitchen utensils set with ergonomic design for comfort and efficiency.',
    image: 'https://images.unsplash.com/photo-1766340758652-8138040b0315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBraXRjaGVuJTIwdXRlbnNpbHN8ZW58MXx8fHwxNzY3NjIwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Heat-resistant materials',
      'Ergonomic handles',
      'Non-stick compatible',
      'Easy to clean',
      '15-piece set'
    ],
    specifications: {
      'Set Size': '15 Pieces',
      'Material': 'Stainless Steel & Silicone',
      'Temperature Resistance': 'Up to 480°F',
      'Dishwasher Safe': 'Yes',
      'Warranty': '1 Year'
    }
  },
  {
    id: 6,
    name: 'Modern Kitchen Appliance Collection',
    category: 'appliances',
    description: 'State-of-the-art kitchen appliances with smart features and sleek design for modern kitchens.',
    image: 'https://images.unsplash.com/photo-1642979427252-13d5fd18bb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwxfHx8fDE3Njc1Mzc1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Smart temperature control',
      'Energy efficient',
      'Modern aesthetics',
      'Multiple functions',
      'Digital display'
    ],
    specifications: {
      'Technology': 'Smart',
      'Finish': 'Brushed Stainless Steel',
      'Control Type': 'Digital',
      'Energy Rating': '5 Star',
      'Warranty': '3 Years'
    }
  },
  {
    id: 7,
    name: 'Heavy Duty Pressure Cooker',
    category: 'cookware',
    description: 'Commercial-grade pressure cooker for fast and efficient cooking in busy kitchens.',
    image: 'https://images.unsplash.com/photo-1765959990052-fab57c043979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMGNvb2t3YXJlfGVufDF8fHx8MTc2NzYyMDA1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Multiple safety features',
      'Large capacity',
      'Quick cooking',
      'Induction compatible',
      'Easy-lock lid'
    ],
    specifications: {
      'Capacity': '10 Liters',
      'Material': 'Aluminum with Steel Base',
      'Safety Features': '5 Safety Systems',
      'Compatibility': 'All Cooktops',
      'Warranty': '2 Years'
    }
  },
  {
    id: 8,
    name: 'Industrial Gas Range',
    category: 'gas-stoves',
    description: 'Industrial-strength gas range with multiple burners for high-volume cooking operations.',
    image: 'https://images.unsplash.com/photo-1728976224749-f50c07a48603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZ2FzJTIwc3RvdmV8ZW58MXx8fHwxNzY3NjIwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      '6 powerful burners',
      'Heavy-duty grates',
      'Precision temperature control',
      'Easy ignition system',
      'Professional grade'
    ],
    specifications: {
      'Burner Count': '6',
      'Total BTU': '180,000 BTU/hr',
      'Material': 'Stainless Steel',
      'Dimensions': '48" x 30" x 36"',
      'Warranty': '3 Years'
    }
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: 'Package' },
  { id: 'cookware', name: 'Cookware', icon: 'ChefHat' },
  { id: 'appliances', name: 'Appliances', icon: 'Package' },
  { id: 'gas-stoves', name: 'Gas Stoves', icon: 'UtensilsCrossed' },
  { id: 'utensils', name: 'Utensils', icon: 'UtensilsCrossed' },
  { id: 'mixers', name: 'Mixers & Grinders', icon: 'Package' }
];
