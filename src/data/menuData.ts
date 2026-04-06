import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";
import dishCeviche from "@/assets/dish-ceviche.jpg";
import dishBurrata from "@/assets/dish-burrata.jpg";
import dishSashimi from "@/assets/dish-sashimi.jpg";
import dishDragonRoll from "@/assets/dish-dragon-roll.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishDuck from "@/assets/dish-duck.jpg";
import dishRisotto from "@/assets/dish-risotto.jpg";
import dishTorrija from "@/assets/dish-torrija.jpg";
import dishTiramisu from "@/assets/dish-tiramisu.jpg";
import dishGintonic from "@/assets/dish-gintonic.jpg";
import dishWine from "@/assets/dish-wine.jpg";
import dishRavioli from "@/assets/dish-ravioli.jpg";

export type DishTag = "picante" | "vegano" | "sin gluten" | "top ventas" | "nuevo" | "chef recomienda";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: DishTag[];
  ingredients: string[];
  allergens: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
}

export const categories: MenuCategory[] = [
  { id: "entrantes", name: "Entrantes" },
  { id: "sushi", name: "Sushi & Crudo" },
  { id: "carnes", name: "Carnes" },
  { id: "pastas", name: "Pastas & Arroces" },
  { id: "postres", name: "Postres" },
  { id: "bebidas", name: "Bebidas" },
];

export const dishes: Dish[] = [
  // --- ENTRANTES ---
  {
    id: "1",
    name: "Tartar de Wagyu",
    description: "Wagyu A5 cortado a cuchillo con yema curada, trufa negra y emulsión de soja ahumada",
    price: 28,
    image: dish1,
    category: "entrantes",
    tags: ["top ventas", "chef recomienda"],
    ingredients: ["Wagyu A5", "Yema curada", "Trufa negra", "Soja ahumada", "Microgreens"],
    allergens: ["Huevo", "Soja"],
  },
  {
    id: "2",
    name: "Ceviche de Corvina",
    description: "Corvina salvaje marinada en leche de tigre con cebolla morada, cilantro y boniato crujiente",
    price: 22,
    image: dishCeviche,
    category: "entrantes",
    tags: ["sin gluten", "nuevo"],
    ingredients: ["Corvina salvaje", "Lima", "Cilantro", "Cebolla morada", "Boniato"],
    allergens: ["Pescado"],
  },
  {
    id: "3",
    name: "Burrata di Puglia",
    description: "Burrata artesanal con tomates heritage, aceite de albahaca y reducción de Módena 25 años",
    price: 19,
    image: dishBurrata,
    category: "entrantes",
    tags: ["vegano"],
    ingredients: ["Burrata DOP", "Tomates heritage", "Albahaca", "Módena 25 años"],
    allergens: ["Lácteos"],
  },

  // --- SUSHI & CRUDO ---
  {
    id: "4",
    name: "Omakase Selection",
    description: "Selección del chef con 12 piezas de nigiri y maki premium del día",
    price: 42,
    image: dish2,
    category: "sushi",
    tags: ["top ventas", "sin gluten"],
    ingredients: ["Atún rojo", "Salmón noruego", "Hamachi", "Vieira", "Arroz de sushi"],
    allergens: ["Pescado", "Marisco"],
  },
  {
    id: "5",
    name: "Sashimi de Salmón",
    description: "Salmón noruego premium cortado finamente con ponzu yuzu y ralladura de jengibre fresco",
    price: 24,
    image: dishSashimi,
    category: "sushi",
    tags: ["sin gluten"],
    ingredients: ["Salmón noruego", "Ponzu yuzu", "Jengibre", "Rábano daikon"],
    allergens: ["Pescado", "Soja"],
  },
  {
    id: "6",
    name: "Dragon Roll",
    description: "Roll de anguila glaseada con aguacate, tobiko y salsa unagi sobre arroz templado",
    price: 26,
    image: dishDragonRoll,
    category: "sushi",
    tags: ["top ventas"],
    ingredients: ["Anguila", "Aguacate", "Tobiko", "Salsa unagi", "Arroz de sushi"],
    allergens: ["Pescado", "Soja", "Gluten"],
  },

  // --- CARNES ---
  {
    id: "7",
    name: "Chuletón de Vaca Vieja",
    description: "Vaca vieja madurada 60 días a la brasa con sal Maldon y romero fresco",
    price: 58,
    image: dish5,
    category: "carnes",
    tags: ["chef recomienda", "sin gluten"],
    ingredients: ["Vaca vieja 60 días", "Sal Maldon", "Romero", "Ajo negro"],
    allergens: [],
  },
  {
    id: "8",
    name: "Rack de Cordero",
    description: "Costillar de cordero lechal con costra de hierbas finas, jus de romero y verduras asadas",
    price: 38,
    image: dishLamb,
    category: "carnes",
    tags: ["sin gluten"],
    ingredients: ["Cordero lechal", "Hierbas provenzales", "Romero", "Zanahoria", "Espárragos"],
    allergens: [],
  },
  {
    id: "9",
    name: "Magret de Pato",
    description: "Pechuga de pato rosada con reducción de cerezas, puré de chirivía y brotes tiernos",
    price: 34,
    image: dishDuck,
    category: "carnes",
    tags: ["nuevo", "sin gluten"],
    ingredients: ["Pato", "Cerezas", "Chirivía", "Porto"],
    allergens: [],
  },

  // --- PASTAS & ARROCES ---
  {
    id: "10",
    name: "Tagliatelle al Tartufo",
    description: "Pasta fresca artesanal con mantequilla de trufa blanca d'Alba y parmigiano 36 meses",
    price: 32,
    image: dish3,
    category: "pastas",
    tags: ["top ventas"],
    ingredients: ["Pasta fresca", "Trufa blanca d'Alba", "Parmigiano Reggiano", "Mantequilla"],
    allergens: ["Gluten", "Lácteos"],
  },
  {
    id: "11",
    name: "Ravioli de Bogavante",
    description: "Ravioli relleno de bogavante gallego con bisque de marisco y microgreens",
    price: 36,
    image: dishRavioli,
    category: "pastas",
    tags: ["chef recomienda"],
    ingredients: ["Bogavante gallego", "Pasta fresca", "Bisque de marisco", "Microgreens"],
    allergens: ["Gluten", "Marisco", "Huevo"],
  },
  {
    id: "12",
    name: "Risotto ai Funghi",
    description: "Arroz carnaroli cremoso con boletus edulis, aceite de trufa y lascas de parmesano",
    price: 28,
    image: dishRisotto,
    category: "pastas",
    tags: ["vegano"],
    ingredients: ["Arroz carnaroli", "Boletus edulis", "Aceite de trufa", "Parmesano"],
    allergens: ["Lácteos"],
  },

  // --- POSTRES ---
  {
    id: "13",
    name: "Coulant de Chocolate",
    description: "Fondant de chocolate Valrhona 70% con hoja de oro y helado de vainilla de Madagascar",
    price: 18,
    image: dish4,
    category: "postres",
    tags: ["top ventas"],
    ingredients: ["Chocolate Valrhona 70%", "Hoja de oro", "Vainilla de Madagascar", "Mantequilla"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
  },
  {
    id: "14",
    name: "Torrija Caramelizada",
    description: "Torrija de brioche artesano empapada en leche infusionada con canela, caramelizada y servida con helado de vainilla bourbon",
    price: 16,
    image: dishTorrija,
    category: "postres",
    tags: ["nuevo", "chef recomienda"],
    ingredients: ["Brioche artesano", "Leche infusionada", "Canela de Ceilán", "Vainilla bourbon", "Miel de azahar"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
  },
  {
    id: "15",
    name: "Tiramisú Clásico",
    description: "Capas de mascarpone cremoso, bizcocho empapado en espresso y cacao amargo Valrhona",
    price: 15,
    image: dishTiramisu,
    category: "postres",
    tags: [],
    ingredients: ["Mascarpone", "Espresso", "Bizcocho", "Cacao Valrhona", "Marsala"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
  },

  // --- BEBIDAS ---
  {
    id: "16",
    name: "Old Fashioned Ahumado",
    description: "Bourbon premium con bitter de naranja, sirope de arce ahumado y twist de naranja caramelizada",
    price: 16,
    image: dish6,
    category: "bebidas",
    tags: ["top ventas"],
    ingredients: ["Bourbon", "Bitter de naranja", "Sirope de arce", "Naranja"],
    allergens: [],
  },
  {
    id: "17",
    name: "Gin Tonic Botánico",
    description: "Gin premium con tónica artesanal, enebro, romero fresco y pimienta negra Tellicherry",
    price: 14,
    image: dishGintonic,
    category: "bebidas",
    tags: ["nuevo"],
    ingredients: ["Gin premium", "Tónica artesanal", "Enebro", "Romero", "Pimienta negra"],
    allergens: [],
  },
  {
    id: "18",
    name: "Selección de Vinos",
    description: "Copa de vino tinto reserva, selección del sommelier. Crianza en barrica de roble francés",
    price: 12,
    image: dishWine,
    category: "bebidas",
    tags: [],
    ingredients: ["Tempranillo", "Roble francés", "Crianza 18 meses"],
    allergens: ["Sulfitos"],
  },
];
