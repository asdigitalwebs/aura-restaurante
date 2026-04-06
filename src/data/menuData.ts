import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";

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
  icon: string;
}

export const categories: MenuCategory[] = [
  { id: "entrantes", name: "Entrantes", icon: "🥗" },
  { id: "sushi", name: "Sushi & Crudo", icon: "🍣" },
  { id: "carnes", name: "Carnes", icon: "🥩" },
  { id: "pastas", name: "Pastas", icon: "🍝" },
  { id: "postres", name: "Postres", icon: "🍫" },
  { id: "bebidas", name: "Bebidas", icon: "🍸" },
];

export const dishes: Dish[] = [
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
    id: "3",
    name: "Tagliatelle al Tartufo",
    description: "Pasta fresca artesanal con mantequilla de trufa blanca d'Alba y parmigiano 36 meses",
    price: 32,
    image: dish3,
    category: "pastas",
    tags: ["vegano", "nuevo"],
    ingredients: ["Pasta fresca", "Trufa blanca d'Alba", "Parmigiano Reggiano", "Mantequilla"],
    allergens: ["Gluten", "Lácteos"],
  },
  {
    id: "4",
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
    id: "5",
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
    id: "6",
    name: "Old Fashioned Ahumado",
    description: "Bourbon premium con bitter de naranja, sirope de arce ahumado y twist de naranja caramelizada",
    price: 16,
    image: dish6,
    category: "bebidas",
    tags: ["nuevo", "top ventas"],
    ingredients: ["Bourbon", "Bitter de naranja", "Sirope de arce", "Naranja"],
    allergens: [],
  },
];
