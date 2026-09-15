import {
  Leaf,
  TreePine,
  Apple,
  Calendar,
  Brain,
  Sun,
  Heart,
  Nut,
  Circle,
  Flower2,
  Sprout,
  Cherry,
  Banana,
} from 'lucide-react';

export const PRODUCTS = [
  // ═══════════════════════════════════════════════
  //  NUTS  (13)
  // ═══════════════════════════════════════════════
  { id: 1,  name: 'Almonds',                urdu: 'بادام',            price: 1850, originalPrice: null, icon: Leaf,      image: '/products/almonds.png',        unit: '500g', rating: 4.8, tag: 'Bestseller', category: 'Nuts' },
  { id: 2,  name: 'Cashews',                urdu: 'کاجو',              price: 2450, originalPrice: null, icon: TreePine,  image: '/products/cashews.jpg',        unit: '500g', rating: 4.9, tag: 'Premium',    category: 'Nuts' },
  { id: 3,  name: 'Pistachios',             urdu: 'پستہ',              price: 2790, originalPrice: null, icon: Leaf,      image: '/products/pistachios.jpg',     unit: '400g', rating: 4.7, tag: null,         category: 'Nuts' },
  { id: 4,  name: 'Walnuts',                urdu: 'اخروٹ',             price: 2290, originalPrice: null, icon: Brain,     image: '/products/walnuts.webp',        unit: '400g', rating: 4.5, tag: null,         category: 'Nuts' },
  { id: 5,  name: 'Peanuts',                urdu: 'پھلی مونگ',         price: 450,  originalPrice: null, icon: Nut,       image: '/products/peanuts.jpg',        unit: '500g', rating: 4.3, tag: null,         category: 'Nuts' },
  { id: 6,  name: 'Hazelnuts',              urdu: 'نٹ ہیزل',           price: 2650, originalPrice: null, icon: Circle,    image: '/products/hazelnuts.jfif',      unit: '400g', rating: 4.6, tag: null,         category: 'Nuts' },
  { id: 7,  name: 'Pine Nuts (Chilgoza)',   urdu: 'چلغوزہ',            price: 4500, originalPrice: null, icon: Nut,       image: '/products/pinenut.webp',      unit: '250g', rating: 4.8, tag: 'Premium',    category: 'Nuts' },
  { id: 8,  name: 'Brazil Nuts',            urdu: 'نٹ برازیل',         price: 3200, originalPrice: null, icon: Circle,    image: '/products/brazil-nuts.jfif',    unit: '400g', rating: 4.4, tag: null,         category: 'Nuts' },
  { id: 9,  name: 'Macadamia Nuts',         urdu: 'نٹ میکاڈیمیا',      price: 3800, originalPrice: null, icon: Circle,    image: '/products/macadamia-nuts.jpg', unit: '300g', rating: 4.7, tag: null,         category: 'Nuts' },
  { id: 10, name: 'Pecans',                 urdu: 'نٹ پیکن',           price: 3350, originalPrice: null, icon: Brain,     image: '/products/pecans.jpg',         unit: '400g', rating: 4.5, tag: null,         category: 'Nuts' },
  { id: 11, name: 'Chironji / Charoli',     urdu: 'چارولی',            price: 2100, originalPrice: null, icon: Circle,    image: '/products/chironji.jpg',       unit: '250g', rating: 4.4, tag: null,         category: 'Nuts' },
  { id: 12, name: 'Betel Nuts (Supari)',    urdu: 'سپاری',             price: 850,  originalPrice: null, icon: Circle,    image: '/products/betel-nuts.jpg',     unit: '500g', rating: 4.2, tag: null,         category: 'Nuts' },
  { id: 13, name: 'Fox Nuts (Makhana)',     urdu: 'مکھانہ',            price: 1450, originalPrice: null, icon: Circle,    image: '/products/makhana.jpg',        unit: '250g', rating: 4.6, tag: null,         category: 'Nuts' },

  // ═══════════════════════════════════════════════
  //  DRIED FRUITS  (27)
  // ═══════════════════════════════════════════════
  { id: 14, name: 'Green Raisins (Kishmish)', urdu: 'کشمش سبز',        price: 720,  originalPrice: null, icon: Sun,      image: '/products/green-raisins.jpg',   unit: '500g', rating: 4.5, tag: null,      category: 'Dried Fruits' },
  { id: 15, name: 'Black Raisins',            urdu: 'کشمش کالی',       price: 780,  originalPrice: null, icon: Sun,      image: '/products/black-raisins.jpg',   unit: '500g', rating: 4.4, tag: null,      category: 'Dried Fruits' },
  { id: 16, name: 'Golden Raisins',           urdu: 'کشمش گولڈن',      price: 690,  originalPrice: 890,  icon: Sun,      image: '/products/golden-raisins.jpg',  unit: '500g', rating: 4.4, tag: 'Sale',    category: 'Dried Fruits' },
  { id: 17, name: 'Munaqqa (Large Raisins)',  urdu: 'منقہ',            price: 1250, originalPrice: null, icon: Sun,      image: '/products/munaqqa.jpg',         unit: '500g', rating: 4.6, tag: null,      category: 'Dried Fruits' },
  { id: 18, name: 'Dates (Khajoor)',          urdu: 'کھجور',           price: 950,  originalPrice: null, icon: Calendar, image: '/products/dates.jpg',           unit: '500g', rating: 4.7, tag: null,      category: 'Dried Fruits' },
  { id: 19, name: 'Chuara (Dried Dates)',     urdu: 'چھوارہ',          price: 850,  originalPrice: null, icon: Calendar, image: '/products/chuara.jpg',          unit: '500g', rating: 4.3, tag: null,      category: 'Dried Fruits' },
  { id: 20, name: 'Dried Figs (Anjeer)',      urdu: 'انجیر خشک',       price: 1650, originalPrice: null, icon: Apple,    image: '/products/dried-figs.jpg',      unit: '300g', rating: 4.6, tag: null,      category: 'Dried Fruits' },
  { id: 21, name: 'Dried Apricots (Khubani)', urdu: 'خوبانی خشک',      price: 1150, originalPrice: null, icon: Apple,    image: '/products/dried-apricots.jpg',  unit: '300g', rating: 4.6, tag: null,      category: 'Dried Fruits' },
  { id: 22, name: 'Prunes (Dried Plums)',     urdu: 'آلوبخارا خشک',    price: 1290, originalPrice: null, icon: Circle,   image: '/products/prunes.jpg',          unit: '300g', rating: 4.5, tag: null,      category: 'Dried Fruits' },
  { id: 23, name: 'Dried Coconut',            urdu: 'ناریل خشک',       price: 850,  originalPrice: null, icon: Circle,   image: '/products/dried-coconut.jpg',   unit: '300g', rating: 4.4, tag: null,      category: 'Dried Fruits' },
  { id: 24, name: 'Dried Mulberries (Tut)',   urdu: 'توت خشک',         price: 1450, originalPrice: null, icon: Circle,   image: '/products/dried-mulberries.jpg',unit: '250g', rating: 4.6, tag: null,      category: 'Dried Fruits' },
  { id: 25, name: 'Dried Apple Rings',        urdu: 'سیب خشک',         price: 1190, originalPrice: null, icon: Apple,    image: '/products/dried-apple.jpg',     unit: '200g', rating: 4.3, tag: null,      category: 'Dried Fruits' },
  { id: 26, name: 'Dried Banana Chips',       urdu: 'چپس کے کیلے',     price: 690,  originalPrice: null, icon: Banana,   image: '/products/dried-banana.jpg',    unit: '250g', rating: 4.5, tag: null,      category: 'Dried Fruits' },
  { id: 27, name: 'Tamarind (Imli)',          urdu: 'املی',            price: 450,  originalPrice: null, icon: Circle,   image: '/products/tamarind.jpg',        unit: '500g', rating: 4.4, tag: null,      category: 'Dried Fruits' },
  { id: 28, name: 'Dried Mango',              urdu: 'آم خشک',          price: 1250, originalPrice: null, icon: Circle,   image: '/products/dried-mango.jpg',     unit: '250g', rating: 4.7, tag: null,      category: 'Dried Fruits' },
  { id: 29, name: 'Dried Pineapple',          urdu: 'انناس خشک',       price: 1150, originalPrice: null, icon: Circle,   image: '/products/dried-pineapple.jpg', unit: '250g', rating: 4.5, tag: null,      category: 'Dried Fruits' },
  { id: 30, name: 'Dried Papaya',             urdu: 'پپیتا خشک',       price: 950,  originalPrice: null, icon: Circle,   image: '/products/dried-papaya.jpg',    unit: '250g', rating: 4.3, tag: null,      category: 'Dried Fruits' },
  { id: 31, name: 'Dried Cranberries',        urdu: 'بیری کرین خشک',   price: 1290, originalPrice: null, icon: Heart,    image: '/products/dried-cranberries.jpg',unit: '300g', rating: 4.7, tag: null,      category: 'Dried Fruits' },
  { id: 32, name: 'Dried Cherries',           urdu: 'چیری خشک',        price: 1450, originalPrice: null, icon: Cherry,   image: '/products/dried-cherries.jpg',  unit: '250g', rating: 4.5, tag: null,      category: 'Dried Fruits' },
  { id: 33, name: 'Dried Kiwi',               urdu: 'کیوی خشک',        price: 1350, originalPrice: null, icon: Circle,   image: '/products/dried-kiwi.jpg',      unit: '200g', rating: 4.4, tag: null,      category: 'Dried Fruits' },
  { id: 34, name: 'Dried Peaches',            urdu: 'آڑو خشک',         price: 1190, originalPrice: null, icon: Circle,   image: '/products/dried-peaches.jpg',   unit: '250g', rating: 4.3, tag: null,      category: 'Dried Fruits' },
  { id: 35, name: 'Dried Pears',              urdu: 'ناشپاتی خشک',     price: 1090, originalPrice: null, icon: Circle,   image: '/products/dried-pears.jpg',     unit: '250g', rating: 4.2, tag: null,      category: 'Dried Fruits' },
  { id: 36, name: 'Dried Blueberries',        urdu: 'بیری بلیو خشک',   price: 1650, originalPrice: null, icon: Circle,   image: '/products/dried-blueberries.jpg',unit: '200g', rating: 4.6, tag: null,     category: 'Dried Fruits' },
  { id: 37, name: 'Dried Strawberries',       urdu: 'اسٹرابیری خشک',   price: 1550, originalPrice: null, icon: Circle,   image: '/products/dried-strawberries.jpg', unit: '200g', rating: 4.6, tag: null,   category: 'Dried Fruits' },
  { id: 38, name: 'Jujube (Unnab)',           urdu: 'عناب',            price: 750,  originalPrice: null, icon: Circle,   image: '/products/jujube.jpg',          unit: '500g', rating: 4.5, tag: null,      category: 'Dried Fruits' },
  { id: 39, name: 'Dried Gooseberry (Amla)',  urdu: 'آنولہ خشک',       price: 850,  originalPrice: null, icon: Circle,   image: '/products/amla.jpg',            unit: '300g', rating: 4.4, tag: null,      category: 'Dried Fruits' },
  { id: 40, name: 'Candied Ginger',           urdu: 'ادرک کینڈیڈ',     price: 950,  originalPrice: null, icon: Circle,   image: '/products/candied-ginger.jpg',  unit: '250g', rating: 4.3, tag: null,      category: 'Dried Fruits' },

  // ═══════════════════════════════════════════════
  //  SEEDS  (10)
  // ═══════════════════════════════════════════════
  { id: 41, name: 'Pumpkin Seeds',            urdu: 'بیج کے کدو',       price: 890,  originalPrice: null, icon: Sprout,   image: '/products/pumpkin-seeds.jpg',   unit: '300g', rating: 4.6, tag: null,      category: 'Seeds' },
  { id: 42, name: 'Sunflower Seeds',          urdu: 'سورج مکھی کے بیج', price: 650,  originalPrice: null, icon: Flower2,  image: '/products/sunflower-seeds.jpg', unit: '500g', rating: 4.5, tag: null,      category: 'Seeds' },
  { id: 43, name: 'Chia Seeds',               urdu: 'بیج کے چیا',       price: 990,  originalPrice: null, icon: Sprout,   image: '/products/chia-seeds.jpg',      unit: '300g', rating: 4.7, tag: 'Organic', category: 'Seeds' },
  { id: 44, name: 'Flax Seeds (Alsi)',        urdu: 'بیج کے السی',      price: 550,  originalPrice: null, icon: Sprout,   image: '/products/flax-seeds.jpg',      unit: '500g', rating: 4.5, tag: null,      category: 'Seeds' },
  { id: 45, name: 'Sesame Seeds (Til)',       urdu: 'تل',              price: 690,  originalPrice: null, icon: Circle,   image: '/products/sesame-seeds.jpg',    unit: '500g', rating: 4.4, tag: null,      category: 'Seeds' },
  { id: 46, name: 'Melon Seeds (Magaz)',      urdu: 'بیج کے خربوزے',    price: 1250, originalPrice: null, icon: Circle,   image: '/products/melon-seeds.jpg',     unit: '300g', rating: 4.6, tag: null,      category: 'Seeds' },
  { id: 47, name: 'Watermelon Seeds',         urdu: 'بیج کے تربوز',     price: 1150, originalPrice: null, icon: Circle,   image: '/products/watermelon-seeds.jpg',unit: '300g', rating: 4.5, tag: null,      category: 'Seeds' },
  { id: 48, name: 'Poppy Seeds (Khashkhash)', urdu: 'خشخاش',           price: 890,  originalPrice: null, icon: Circle,   image: '/products/poppy-seeds.jpg',     unit: '250g', rating: 4.4, tag: null,      category: 'Seeds' },
  { id: 49, name: 'Char Magaz (Mixed 4 Seeds)', urdu: 'مغز چار',       price: 1450, originalPrice: null, icon: Circle,   image: '/products/char-magaz.jpg',      unit: '250g', rating: 4.7, tag: 'Premium', category: 'Seeds' },
  { id: 50, name: 'Nigella Seeds (Kalonji)',  urdu: 'کلونجی',          price: 490,  originalPrice: null, icon: Circle,   image: '/products/nigella-seeds.jpg',   unit: '250g', rating: 4.5, tag: null,      category: 'Seeds' },

  // ═══════════════════════════════════════════════
  //  HERBS & SPICES  (6)
  // ═══════════════════════════════════════════════
  { id: 51, name: 'Edible Gum (Gond)',          urdu: 'گوند',           price: 1250, originalPrice: null, icon: Circle,   image: '/products/edible-gum.jpg',      unit: '250g', rating: 4.5, tag: null,      category: 'Herbs & Spices' },
  { id: 52, name: 'Gond Katira (Tragacanth)',   urdu: 'کتیرا گوند',     price: 1450, originalPrice: null, icon: Circle,   image: '/products/gond-katira.jpg',     unit: '250g', rating: 4.4, tag: null,      category: 'Herbs & Spices' },
  { id: 53, name: 'Roasted Chickpeas (Chana)',  urdu: 'چنا ہوا بھنا',   price: 450,  originalPrice: null, icon: Circle,   image: '/products/roasted-chickpeas.jpg', unit: '500g', rating: 4.4, tag: null,    category: 'Herbs & Spices' },
  { id: 54, name: 'Roasted Moong Dal',          urdu: 'دال مونگ ہوئی بھنی', price: 520, originalPrice: null, icon: Circle, image: '/products/roasted-moong-dal.jpg', unit: '500g', rating: 4.3, tag: null,   category: 'Herbs & Spices' },
  { id: 55, name: 'Dried Ginger (Sonth)',       urdu: 'سونٹھ',          price: 750,  originalPrice: null, icon: Circle,   image: '/products/dried-ginger.jpg',    unit: '250g', rating: 4.5, tag: null,      category: 'Herbs & Spices' },
  { id: 56, name: 'Fennel Seeds (Saunf)',       urdu: 'سونف',           price: 390,  originalPrice: null, icon: Circle,   image: '/products/fennel-seeds.jpg',    unit: '250g', rating: 4.6, tag: null,      category: 'Herbs & Spices' },

  // ═══════════════════════════════════════════════
  //  MIXES  (3)
  // ═══════════════════════════════════════════════
  { id: 57, name: 'Mixed Dry Fruits',           urdu: 'ملے جلے خشک میوہ جات', price: 1850, originalPrice: null, icon: Circle, image: '/products/mixed-dry-fruits.jpg', unit: '500g', rating: 4.8, tag: 'Bestseller', category: 'Mixes' },
  { id: 58, name: 'Trail Mix',                  urdu: 'مکس ٹریل',       price: 1550, originalPrice: null, icon: Circle,   image: '/products/trail-mix.jpg',       unit: '400g', rating: 4.7, tag: null,      category: 'Mixes' },
  { id: 59, name: 'Panjiri Mix',                urdu: 'مکس پ',          price: 1350, originalPrice: null, icon: Circle,   image: '/products/panjiri-mix.jpg',     unit: '500g', rating: 4.8, tag: 'Premium', category: 'Mixes' },
];