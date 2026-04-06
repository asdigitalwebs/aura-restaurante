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
import dishTataki from "@/assets/dish-tataki.jpg";
import dishPulpo from "@/assets/dish-pulpo.jpg";
import dishPaella from "@/assets/dish-paella.jpg";
import dishLubina from "@/assets/dish-lubina.jpg";
import dishPannacotta from "@/assets/dish-pannacotta.jpg";
import dishEspressoMartini from "@/assets/dish-espresso-martini.jpg";
import dishNegroni from "@/assets/dish-negroni.jpg";
import dishAgua from "@/assets/dish-agua.jpg";
import dishLimonada from "@/assets/dish-limonada.jpg";
import dishWhiteWine from "@/assets/dish-white-wine.jpg";
import dishChampagne from "@/assets/dish-champagne.jpg";
import dishGyozas from "@/assets/dish-gyozas.jpg";
import dishEnsalada from "@/assets/dish-ensalada.jpg";

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
  { id: "pescados", name: "Pescados" },
  { id: "carnes", name: "Carnes" },
  { id: "pastas", name: "Pastas & Arroces" },
  { id: "postres", name: "Postres" },
  { id: "refrescos", name: "Refrescos & Agua" },
  { id: "vinos", name: "Vinos" },
  { id: "cocteles", name: "Cócteles" },
];

export const dishes: Dish[] = [
  // ─── ENTRANTES ───
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
  {
    id: "4",
    name: "Tataki de Atún Rojo",
    description: "Atún rojo de almadraba sellado con costra de sésamo, ponzu y wakame",
    price: 26,
    image: dishTataki,
    category: "entrantes",
    tags: ["sin gluten", "top ventas"],
    ingredients: ["Atún rojo", "Sésamo", "Ponzu", "Wakame", "Jengibre"],
    allergens: ["Pescado", "Sésamo", "Soja"],
  },
  {
    id: "5",
    name: "Pulpo a la Brasa",
    description: "Tentáculo de pulpo gallego sobre parmentier de patata trufada y pimentón de la Vera",
    price: 24,
    image: dishPulpo,
    category: "entrantes",
    tags: ["sin gluten", "chef recomienda"],
    ingredients: ["Pulpo gallego", "Patata", "Trufa", "Pimentón de la Vera"],
    allergens: ["Moluscos"],
  },
  {
    id: "6",
    name: "Gyozas de Langostino",
    description: "Empanadillas japonesas rellenas de langostino y jengibre con salsa ponzu yuzu",
    price: 18,
    image: dishGyozas,
    category: "entrantes",
    tags: ["nuevo"],
    ingredients: ["Langostino", "Jengibre", "Cebolleta", "Salsa ponzu"],
    allergens: ["Marisco", "Gluten", "Soja"],
  },
  {
    id: "7",
    name: "Ensalada César",
    description: "Baby gem, pollo de corral, parmesano 24 meses, croutons de masa madre y anchoas del Cantábrico",
    price: 17,
    image: dishEnsalada,
    category: "entrantes",
    tags: [],
    ingredients: ["Baby gem", "Pollo de corral", "Parmesano", "Anchoas", "Masa madre"],
    allergens: ["Gluten", "Lácteos", "Huevo", "Pescado"],
  },

  // ─── SUSHI & CRUDO ───
  {
    id: "8",
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
    id: "9",
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
    id: "10",
    name: "Dragon Roll",
    description: "Roll de anguila glaseada con aguacate, tobiko y salsa unagi sobre arroz templado",
    price: 26,
    image: dishDragonRoll,
    category: "sushi",
    tags: ["top ventas"],
    ingredients: ["Anguila", "Aguacate", "Tobiko", "Salsa unagi", "Arroz de sushi"],
    allergens: ["Pescado", "Soja", "Gluten"],
  },

  // ─── PESCADOS ───
  {
    id: "11",
    name: "Lubina Salvaje",
    description: "Lubina salvaje a la plancha con mantequilla de limón, espárragos trigueros y alcaparras",
    price: 34,
    image: dishLubina,
    category: "pescados",
    tags: ["sin gluten", "chef recomienda"],
    ingredients: ["Lubina salvaje", "Limón", "Mantequilla", "Espárragos", "Alcaparras"],
    allergens: ["Pescado", "Lácteos"],
  },

  // ─── CARNES ───
  {
    id: "12",
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
    id: "13",
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
    id: "14",
    name: "Magret de Pato",
    description: "Pechuga de pato rosada con reducción de cerezas, puré de chirivía y brotes tiernos",
    price: 34,
    image: dishDuck,
    category: "carnes",
    tags: ["nuevo", "sin gluten"],
    ingredients: ["Pato", "Cerezas", "Chirivía", "Porto"],
    allergens: [],
  },

  // ─── PASTAS & ARROCES ───
  {
    id: "15",
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
    id: "16",
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
    id: "17",
    name: "Risotto ai Funghi",
    description: "Arroz carnaroli cremoso con boletus edulis, aceite de trufa y lascas de parmesano",
    price: 28,
    image: dishRisotto,
    category: "pastas",
    tags: ["vegano"],
    ingredients: ["Arroz carnaroli", "Boletus edulis", "Aceite de trufa", "Parmesano"],
    allergens: ["Lácteos"],
  },
  {
    id: "18",
    name: "Paella de Marisco",
    description: "Arroz bomba con caldo de roca, gambas rojas, mejillones, calamares y azafrán de la Mancha",
    price: 32,
    image: dishPaella,
    category: "pastas",
    tags: ["sin gluten", "top ventas"],
    ingredients: ["Arroz bomba", "Gambas rojas", "Mejillones", "Calamares", "Azafrán"],
    allergens: ["Marisco"],
  },

  // ─── POSTRES ───
  {
    id: "19",
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
    id: "20",
    name: "Torrija Caramelizada",
    description: "Torrija de brioche artesano empapada en leche con canela de Ceilán, caramelizada al soplete con helado de vainilla bourbon y miel de azahar",
    price: 16,
    image: dishTorrija,
    category: "postres",
    tags: ["nuevo", "chef recomienda"],
    ingredients: ["Brioche artesano", "Leche infusionada", "Canela de Ceilán", "Vainilla bourbon", "Miel de azahar"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
  },
  {
    id: "21",
    name: "Tiramisú Clásico",
    description: "Capas de mascarpone cremoso, bizcocho empapado en espresso y cacao amargo Valrhona",
    price: 15,
    image: dishTiramisu,
    category: "postres",
    tags: [],
    ingredients: ["Mascarpone", "Espresso", "Bizcocho", "Cacao Valrhona", "Marsala"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
  },
  {
    id: "22",
    name: "Panna Cotta di Lamponi",
    description: "Panna cotta de vainilla de Tahití con coulis de frambuesas frescas y menta",
    price: 14,
    image: dishPannacotta,
    category: "postres",
    tags: ["sin gluten"],
    ingredients: ["Nata", "Vainilla de Tahití", "Frambuesas", "Menta"],
    allergens: ["Lácteos"],
  },

  // ─── REFRESCOS & AGUA ───
  {
    id: "23",
    name: "Agua Mineral Premium",
    description: "Agua mineral natural o con gas. Botella de cristal 75cl",
    price: 5,
    image: dishAgua,
    category: "refrescos",
    tags: [],
    ingredients: ["Agua mineral natural"],
    allergens: [],
  },
  {
    id: "24",
    name: "Limonada Artesanal",
    description: "Limonada casera con hierbas frescas del huerto, frutos del bosque y un toque de jengibre",
    price: 8,
    image: dishLimonada,
    category: "refrescos",
    tags: ["nuevo", "vegano"],
    ingredients: ["Limón", "Hierbas frescas", "Frutos del bosque", "Jengibre", "Agave"],
    allergens: [],
  },
  {
    id: "25",
    name: "Refresco Premium",
    description: "Selección de refrescos artesanales: cola, naranja, tónica o ginger ale",
    price: 4,
    image: dishAgua,
    category: "refrescos",
    tags: [],
    ingredients: ["Refresco artesanal"],
    allergens: [],
  },

  // ─── VINOS ───
  {
    id: "26",
    name: "Tinto Reserva",
    description: "Copa de vino tinto reserva, selección del sommelier. Tempranillo crianza 18 meses en barrica de roble francés",
    price: 12,
    image: dishWine,
    category: "vinos",
    tags: ["top ventas"],
    ingredients: ["Tempranillo", "Roble francés", "Crianza 18 meses"],
    allergens: ["Sulfitos"],
  },
  {
    id: "27",
    name: "Blanco Verdejo",
    description: "Copa de verdejo D.O. Rueda, fresco y aromático con notas de fruta tropical y hierbas",
    price: 10,
    image: dishWhiteWine,
    category: "vinos",
    tags: [],
    ingredients: ["Verdejo", "D.O. Rueda"],
    allergens: ["Sulfitos"],
  },
  {
    id: "28",
    name: "Champagne Brut",
    description: "Copa de champagne francés brut, burbujas finas y persistentes con notas de brioche y cítricos",
    price: 18,
    image: dishChampagne,
    category: "vinos",
    tags: ["chef recomienda"],
    ingredients: ["Chardonnay", "Pinot Noir", "Método tradicional"],
    allergens: ["Sulfitos"],
  },

  // ─── CÓCTELES ───
  {
    id: "29",
    name: "Old Fashioned Ahumado",
    description: "Bourbon premium con bitter de naranja, sirope de arce ahumado y twist de naranja caramelizada",
    price: 16,
    image: dish6,
    category: "cocteles",
    tags: ["top ventas"],
    ingredients: ["Bourbon", "Bitter de naranja", "Sirope de arce", "Naranja"],
    allergens: [],
  },
  {
    id: "30",
    name: "Gin Tonic Botánico",
    description: "Gin premium con tónica artesanal, enebro, romero fresco y pimienta negra Tellicherry",
    price: 14,
    image: dishGintonic,
    category: "cocteles",
    tags: ["nuevo"],
    ingredients: ["Gin premium", "Tónica artesanal", "Enebro", "Romero", "Pimienta negra"],
    allergens: [],
  },
  {
    id: "31",
    name: "Espresso Martini",
    description: "Vodka premium, licor de café, espresso recién extraído y crema de café con granos tostados",
    price: 15,
    image: dishEspressoMartini,
    category: "cocteles",
    tags: ["top ventas"],
    ingredients: ["Vodka", "Licor de café", "Espresso", "Crema de café"],
    allergens: [],
  },
  {
    id: "32",
    name: "Negroni Clásico",
    description: "Gin London Dry, Campari y vermut rojo italiano con twist de naranja fresca",
    price: 14,
    image: dishNegroni,
    category: "cocteles",
    tags: [],
    ingredients: ["Gin London Dry", "Campari", "Vermut rojo", "Naranja"],
    allergens: [],
  },
];
