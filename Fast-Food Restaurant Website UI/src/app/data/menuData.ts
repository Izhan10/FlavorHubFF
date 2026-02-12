import { MenuItem } from './context/CartContext';

export const menuData: MenuItem[] = [
  // Burgers
  {
    id: 'burger-1',
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty with cheddar, lettuce, tomato, and special sauce',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1626869300069-eb1c0866feea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwY2hlZXNlfGVufDF8fHx8MTc3MDg2MzY4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Burgers',
  },
  {
    id: 'burger-2',
    name: 'Double Stack Burger',
    description: 'Two beef patties, double cheese, bacon, and BBQ sauce',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1626869300069-eb1c0866feea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwY2hlZXNlfGVufDF8fHx8MTc3MDg2MzY4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Burgers',
  },
  {
    id: 'burger-3',
    name: 'Spicy Chicken Burger',
    description: 'Crispy chicken with jalapeños, pepper jack, and spicy mayo',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1626869300069-eb1c0866feea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwY2hlZXNlfGVufDF8fHx8MTc3MDg2MzY4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Burgers',
  },
  {
    id: 'burger-4',
    name: 'Veggie Deluxe',
    description: 'Plant-based patty with avocado, sprouts, and herb aioli',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1626869300069-eb1c0866feea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwY2hlZXNlfGVufDF8fHx8MTc3MDg2MzY4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Burgers',
  },
  
  // Pizza
  {
    id: 'pizza-1',
    name: 'Pepperoni Classic',
    description: 'Traditional pepperoni with mozzarella and tomato sauce',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc3MDg3NjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pizza',
  },
  {
    id: 'pizza-2',
    name: 'Margherita',
    description: 'Fresh mozzarella, basil, and tomato on thin crust',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc3MDg3NjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pizza',
  },
  {
    id: 'pizza-3',
    name: 'BBQ Chicken',
    description: 'Grilled chicken, red onions, BBQ sauce, and cilantro',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc3MDg3NjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pizza',
  },
  {
    id: 'pizza-4',
    name: 'Meat Lovers',
    description: 'Pepperoni, sausage, bacon, and ham with extra cheese',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc3MDg3NjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pizza',
  },
  
  // Fries
  {
    id: 'fries-1',
    name: 'Classic Fries',
    description: 'Crispy golden fries with sea salt',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1599211469310-9b0b50a2955a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlzcHklMjBmcmVuY2glMjBmcmllc3xlbnwxfHx8fDE3NzA4MDAxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fries',
  },
  {
    id: 'fries-2',
    name: 'Cheese Fries',
    description: 'Loaded with melted cheddar and bacon bits',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1599211469310-9b0b50a2955a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlzcHklMjBmcmVuY2glMjBmcmllc3xlbnwxfHx8fDE3NzA4MDAxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fries',
  },
  {
    id: 'fries-3',
    name: 'Sweet Potato Fries',
    description: 'Sweet and crispy with honey mustard dip',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1599211469310-9b0b50a2955a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlzcHklMjBmcmVuY2glMjBmcmllc3xlbnwxfHx8fDE3NzA4MDAxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fries',
  },
  
  // Wraps
  {
    id: 'wrap-1',
    name: 'Chicken Caesar Wrap',
    description: 'Grilled chicken, romaine, parmesan, and Caesar dressing',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1666819604634-98dd67634148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwd3JhcCUyMHNhbmR3aWNofGVufDF8fHx8MTc3MDg4NTc5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wraps',
  },
  {
    id: 'wrap-2',
    name: 'Buffalo Chicken Wrap',
    description: 'Spicy buffalo chicken with ranch and crispy lettuce',
    price: 9.49,
    image: 'https://images.unsplash.com/photo-1666819604634-98dd67634148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwd3JhcCUyMHNhbmR3aWNofGVufDF8fHx8MTc3MDg4NTc5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wraps',
  },
  {
    id: 'wrap-3',
    name: 'Veggie Wrap',
    description: 'Hummus, fresh vegetables, and Mediterranean herbs',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1666819604634-98dd67634148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwd3JhcCUyMHNhbmR3aWNofGVufDF8fHx8MTc3MDg4NTc5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wraps',
  },
  
  // Drinks
  {
    id: 'drink-1',
    name: 'Coca-Cola',
    description: 'Classic refreshing cola - 16oz',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1610873167013-2dd675d30ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2RhJTIwZHJpbmslMjBiZXZlcmFnZXxlbnwxfHx8fDE3NzA4NjEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Drinks',
  },
  {
    id: 'drink-2',
    name: 'Fresh Lemonade',
    description: 'House-made lemonade with real lemons - 16oz',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1610873167013-2dd675d30ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2RhJTIwZHJpbmslMjBiZXZlcmFnZXxlbnwxfHx8fDE3NzA4NjEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Drinks',
  },
  {
    id: 'drink-3',
    name: 'Milkshake',
    description: 'Creamy vanilla milkshake - 16oz',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1610873167013-2dd675d30ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2RhJTIwZHJpbmslMjBiZXZlcmFnZXxlbnwxfHx8fDE3NzA4NjEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Drinks',
  },
  
  // Deals
  {
    id: 'deal-1',
    name: 'Burger Combo',
    description: 'Cheeseburger + Fries + Drink',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1734988353291-9ac67fa5997b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwZm9vZCUyMGNvbWJvJTIwbWVhbHxlbnwxfHx8fDE3NzA4ODU3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Deals',
  },
  {
    id: 'deal-2',
    name: 'Family Pack',
    description: '2 Burgers + 2 Pizzas + Large Fries + 4 Drinks',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1734988353291-9ac67fa5997b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwZm9vZCUyMGNvbWJvJTIwbWVhbHxlbnwxfHx8fDE3NzA4ODU3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Deals',
  },
  {
    id: 'deal-3',
    name: 'Lunch Special',
    description: 'Any wrap + Fries + Drink',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1734988353291-9ac67fa5997b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwZm9vZCUyMGNvbWJvJTIwbWVhbHxlbnwxfHx8fDE3NzA4ODU3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Deals',
  },
];

export const categories = ['Burgers', 'Pizza', 'Fries', 'Wraps', 'Drinks', 'Deals'];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'Best burgers in town! The ingredients are always fresh and the service is amazing.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mike Peters',
    text: 'Love their pizza! The crust is perfect and toppings are generous. Highly recommend!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    text: 'Quick delivery and food arrives hot. The combo deals are great value for money.',
    rating: 5,
  },
];
