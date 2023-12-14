/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 *
 */

const Product = require("../models/Product");
const Category = require("../models/Category");
const slugify = require("slugify");

module.exports = async () => {
  const products = [
    {
      name: "Café de la Casa",
      description:
        " Éste café es dulce, de acidez baja, con aromas a frutos rojos y amarillos, que nos hace viajar hasta las montañas de Minas Gerais donde es producido. Notas: Frutal, caramelo, dulce.",
      photo: ["cafe-en-grano.png"],
      price: "630",
      stock: 49,
      category: "Café",
      featured: true,
      shortDescription: "Café en grano / 250g",
      isActive: true,
    },
    {
      name: "Bolistas",
      description: "Es el producto ideal para ella!",
      photo: ["bolistas.png"],
      price: "400",
      stock: 37,
      category: "Merch",
      featured: false,
      shortDescription: "bolistas",
      isActive: false,
    },
    // {
    //   name: "Cafetera Italiana",
    //   description: "Cafeteria de mejor calidad",
    //   photo: ["vialetti.png"],
    //   price: "1500",
    //   stock: 37,
    //   category: "Café",
    //   featured: true,
    // },
    {
      name: "vaso Térmico",
      description:
        "Material: acero inoxidable. Incluye tapa. Cuenta con doble pared de aislamiento. Es libre de BPA. Es apto para lavavajillas. Conserva tus bebidas a una temperatura ideal.",
      photo: ["jarra-termica.png"],
      price: "900",
      stock: 37,
      category: "Merch",
      featured: false,
      shortDescription: "Vaso térmico con doble pared de aislamiento",
      isActive: true,
    },
    {
      name: "Vaso",
      description: "Vaso descartable, biodegradable, hecho con materiales reciclados. Incluye tapa",
      photo: ["vaso.png"],
      price: "50",
      stock: 37,
      category: "Merch",
      featured: false,
      shortDescription: "Vaso descartable biodegradable",
      isActive: true,
    },
    {
      name: "Brasil Crucera",
      description:
        "Brasil Crucera es un café que tiene todos los atributos sensoriales que un café de especialidad debe tener: alta dulzura, buen cuerpo, intensidad y acidez vibrante. Su perfil de sabor es clásico, dulce, achocolatado y con un toque de acidez cítrica. Notas: Chocolate, Bizcotela, Naranja.",
      photo: ["cafe-molido-brasil-crucera_culto.png"],
      price: "550",
      stock: 17,
      category: "Café",
      featured: true,
      shortDescription: "Café molido / 250g",
      isActive: true,
    },
    {
      name: "Guatemala GTA",
      description:
        "Guatemala GTA destaca por su dulzura y notas achocolatadas adornadas por un toque cítrico. Es un café versatil que ofrece tazas limpias tanto en tragos concentrados como livianos y que destaca en tragos con leche. Notas:Mandarina, chocolate amargo, caramelo oscuro.",
      photo: "cafe-molido-guatemala-gta_culto.png",
      price: "700",
      stock: 13,
      category: "Café",
      featured: true,
      shortDescription: "Café molido / 250g",
      isActive: true,
    },
    {
      name: "Etiopía Sasé",
      description:
        "Sasé se caracteriza por su dulzura y cuerpo ligeramente más robusto, lo que lo hace agradable para todos los paladares. Notas: Chocolate Negro, Cerezas, Azucar Mascabo.",
      photo: "cafe-molido-etiopia-sase_culto.png",
      price: "750",
      stock: 15,
      category: "Café",
      featured: false,
      shortDescription: "Café molido / 250g",
      isActive: true,
    },
    {
      name: "Colombia CDO",
      description:
        "Colombia CDO destaca por su dulzura y notas achocolatadas adornadas por un toque cítrico. Es un café versatil que ofrece tazas limpias tanto en tragos concentrados como livianos y que destaca en tragos con leche. Notas: Chocolate con leche, naranja, miel.",
      photo: "cafe-molido-colombia-cdo_culto.png",
      price: "750",
      stock: 18,
      category: "Café",
      featured: false,
      shortDescription: "Café molido / 250g",
      isActive: true,
    },
    {
      name: "Alma Negra",
      description:
        "La singularidad del proceso de producción de este café es que se alternan secado en invernadero con secado al sol, lo que favorece una fermentación lenta. Este café esconde aromas complejos a mermelada de arándanos y bayas, al igual que una acidez que nos recuerda al vino. Notas: Mermelada de frutos del bosque, vinoso, caramelo.",
      photo: "cafe_molido_seismontes_costarica.png",
      price: "970",
      stock: 13,
      category: "Café",
      featured: false,
      shortDescription: "Café molido / 250g",
      isActive: true,
    },
    {
      name: "Siko",
      description:
        "Cultivado a más de 2.100 msnm, en tierras fértiles de suelos rojos, con una constante exposición solar, las semillas de este lote desprenden aromas de una delicadeza sin igual. El Siko es el café perfecto para aquellos aficionados que disfrutan características florales, cítricas y herbales. Notas: Cítrico, herbal, té blanco y floral.",
      photo: "cafe_molido_seismontes_etiopia.png",
      price: "890",
      stock: 4,
      category: "Café",
      featured: true,
      shortDescription: "Café molido / 250g",
      isActive: true,
    },
    {
      name: "Marysabel",
      description:
        "Este café se caracteriza por su metodo de secado, se cosechan los frutos maduros y se ponen a secar en camas africanas dentro de un invernadero. Este proceso puede durar entre 20 y 40 días. El resultado es excepcional: un café con aromas a frutas maduras, uva y cacao. Notas: Uva morada, cacao, fruta madura.",
      photo: "cafe_molido_seismontes_honduras.png",
      price: "820",
      stock: 14,
      category: "Café",
      featured: false,
      shortDescription: "Café molido / 250g",
      isActive: true,
    },
    {
      name: "Kirorero",
      description:
        "Delicado, jugoso, y frutal, así es este Kirorero. Con aromas a frutos cítricos, té negro y especias, este café sabrá cautivar los paladares más exigentes. Notas: cítricos, té negro, especias",
      photo: "cafe_molido_seismontes_ruanda.png",
      price: "810",
      stock: 3,
      category: "Café",
      featured: true,
      shortDescription: "Café molido / 250g",
      isActive: true,
    },
    {
      name: "Balanza digital",
      description: "Peso mínimo: 5g - Peso máximo: 3kg, con recipiente encastrable",
      photo: "balanza-2.png",
      price: "1800",
      stock: 3,
      category: "Bazar",
      featured: false,
      shortDescription: "Balanza digital, 3kg",
      isActive: true,
    },
    {
      name: "Filtros Reutilizables",
      description:
        "Rinde de 8 a 12 tazas.Compuesto por malla tejida de acero inoxidable de grado alimenticio. Libre de BPA. Tamaño:4.8 x 4.6 pulgadas por diámetro superior, 2.3 x 1 pulgadas por diámetro inferior. Lado de altura 3.6 pulgadas. ",
      photo: "Filtros-Reutilizables.png",
      price: "400",
      stock: 20,
      category: "Bazar",
      featured: false,
      shortDescription: "Filtros Reutilizables.",
      isActive: true,
    },
    {
      name: "Filtros Descartables",
      description:
        "Filtros de café de papel 100% biodegradables, ayudan a reducir el impacto ambiental y el desperdicio de agua. No se rompen fácilmente. Número de piezas: 200",
      photo: "Filtros-Descartables.png",
      price: "450",
      stock: 30,
      category: "Bazar",
      featured: false,
      shortDescription: "Filtros Descartables, 200 piezas",
      isActive: true,
    },
    {
      name: "Molinillo",
      description:
        "Fresa de acero inoxidable. Cómodo de transportar. Peso ligero, 450g.Función de ajuste de rugosidad: ajustable en unos 36 pasos. Puedes moler fácilmente la rugosidad deseada de fina a gruesa con la tuerca de ajuste. Desde espresso hasta prensa francesa !",
      photo: "molinillo.png",
      price: "5500",
      stock: 6,
      category: "Bazar",
      featured: false,
      shortDescription: "Molinillo con función de ajuste .",
      isActive: true,
    },
    {
      name: "Prensa Francesa",
      description:
        "Diseño clásico, cuerpo de vidrio y armazón en acero inoxidable, 1 Litro. Resistente al calor, no alterará o reducirá el sabor natural del café.Más respetuoso con el medio ambiente que muchos otros métodos de preparación, sin necesidad de filtros de papel o cápsulas de plástico",
      photo: "Prensa-francesa-bazar.png",
      price: "4600",
      stock: 5,
      category: "Bazar",
      featured: false,
      shortDescription: "Prensa Francesa, 1 Litro.",
      isActive: true,
    },
    {
      name: "Cafetera Italiana",
      description:
        "Rinde 6 tazas, nos brinda aprox 270ml de café y se adapta a cualquier cocina excepto inducción. Uso directo en hornalla. Hecha de aluminio",
      photo: "Cafetera-Italiana.png",
      price: "3100",
      stock: 7,
      category: "Bazar",
      featured: false,
      shortDescription: "Cafetera Italiana, aluminio",
      isActive: true,
    },
    {
      name: "Cafetera automática",
      description:
        "Cafetera espresso automática con display touch screen 7″ HD y espumador de brazo. Tiene una capacidad de 160 g de café en grano y 1,8 L en su contenedor de agua.",
      photo: "espresso-automatica.png",
      price: "39.148",
      stock: 3,
      category: "Máquinas",
      featured: false,
      shortDescription: "Cafetera espresso automática",
      isActive: true,
    },
    {
      name: "Molinillo eléctrico",
      description:
        "Molinillo eléctrico, 12 ajustes de molienda, capacidad 200g. Receptor de café de plástico transparente. Fabricado con acero inoxidable, plástico, goma y silicona",
      photo: "molinillo-electrico.png",
      price: "8500",
      stock: 8,
      category: "Máquinas",
      featured: false,
      shortDescription: "Molinillo eléctrico, 200g",
      isActive: true,
    },
    {
      name: "Máquina profesional",
      description:
        "Máquina de espresso profesional, 2 grupos. Programación automática del agua caliente y botón automático de una sola pulsación. 2 salidas de vapor de gran potencia, que permiten calentar líquidos en su propio recipiente.",
      photo: "Profesional.png",
      price: "5600",
      stock: 8,
      category: "Máquinas",
      featured: false,
      shortDescription: "Máquina de espresso profesional",
      isActive: true,
    },
    {
      name: "Jugos naturales",
      description: "Jugos hechos en el momento con frutas frescas y de temporada.",
      photo: "zumos_naturales.png",
      price: "180",
      stock: 2,
      category: "Carta",
      featured: false,
      shortDescription: "Jugos naturales",
      isActive: true,
    },
    {
      name: "Yogurt griego",
      description: "Con granola casera de semillas y frutos secos, miel y fruta fresca.",
      photo: "yogurt_griego_magnifico.png",
      price: "260",
      stock: 2,
      category: "Carta",
      featured: false,
      shortDescription: "Yogurt griego con granola",
      isActive: true,
    },
    {
      name: "Tostada de mermelada",
      description: "Tostada con mantequilla y mermelada de frambuesa",
      photo: "tostada-de-mermelada.png",
      price: "160",
      stock: 20,
      category: "Carta",
      featured: false,
      shortDescription: "Tostada de mermelada",
      isActive: true,
    },
    {
      name: "Tostada de chocolate",
      description: "Tostada con Chocolate, frambuesa y pistachos",
      photo: "tostada-de-mermelada.png",
      price: "210",
      stock: 20,
      category: "Carta",
      featured: false,
      shortDescription: "Tostada con Chocolate",
      isActive: true,
    },
    {
      name: "Pancakes Galantes",
      description:
        "De semillas de amapola, servidos con yogurt griego y fruta de temporada (Opción de Sirope o Nutella)",
      photo: "pancakes_galantes.png",
      price: "380",
      stock: 10,
      category: "Carta",
      featured: false,
      shortDescription: "Pancakes con yogurt griego",
      isActive: true,
    },
    {
      name: "Tostada de aguacate",
      description: "Aguacate, tomates confitados y semillas",
      photo: "tostada-de-aguacate.png",
      price: "260",
      stock: 20,
      category: "Carta",
      featured: false,
      shortDescription: "Tostada de aguacate",
      isActive: true,
    },
    {
      name: "Vegan",
      description:
        "Pan chapata, tomate seco, hummus de albahaca, cebolla encurtida, pimientos asados y hojas verdes.",
      photo: "vegan.png",
      price: "380",
      stock: 5,
      category: "Carta",
      featured: false,
      shortDescription: "Pan chapata y vegetales",
      isActive: true,
    },
    {
      name: "Cacerola de huevos",
      description:
        "Con sofrito de pimiento, espinacas, yogurt griego y aceite de hierbas, servidos con pan pages. Todos los huevos son a baja temperatura.",
      photo: "cacerola_de_huevos.png",
      price: "410",
      stock: 5,
      category: "Carta",
      featured: false,
      shortDescription: "Vegetales y yogurt griego",
      isActive: true,
    },
    {
      name: "Bolsas",
      description:
        "Las bolsas ecológicas más lindas y prácticas. Hechas de tela resistente y livianas. Llevalas contigo a todos lados, será tu aliada perfecta.",
      photo: "bolsitas-ca.png",
      price: "430",
      stock: 25,
      category: "Merch",
      featured: false,
      shortDescription: "Bolsas ecológicas",
      isActive: true,
    },
    {
      name: "Vasos descartables Casa de abajo",
      description:
        "Vasos de papel, biodegradables y reutilizables. Diseños de Casa de abajo. Pack x 10 unidades.",
      photo: "vasos-descartables-ca.png",
      price: "200",
      stock: 15,
      category: "Merch",
      featured: false,
      shortDescription: "Vasos de papel x 10 unidades",
      isActive: true,
    },
    {
      name: "Stickers",
      description:
        "Pack de stickers Casa de abajo x 8 unidades.",
      photo: "stikers.png",
      price: "130",
      stock: 50,
      category: "Merch",
      featured: false,
      shortDescription: "Pack de stickers CA",
      isActive: true,
    },
    {
      name: "Molinillo eléctrico",
      description:
        "Molinillo profesional de café. Regulación micrométrica continua patentada.  Diseño de muelas especiales diseñado para lograr un rendimiento óptimo con cualquier tipo de modo de molienda deseado.",
      photo: "molinillo-electrico-2.png",
      price: "30.200",
      stock: 10,
      category: "Máquinas",
      featured: false,
      shortDescription: "Molinillo profesional de café.",
      isActive: true,
    },
    {
      name: "Kit de regalo",
      description:
        "Kit de regalo",
      photo: "Kit-regalo-1.png",
      price: "1600",
      stock: 10,
      category: "Kits de regalos",
      featured: false,
      shortDescription: "Kit de regalo",
      isActive: true,
    },
  ];

  for (const product of products) {
    const newProduct = new Product(product);
    newProduct.slug = slugify(`${newProduct.name} ${newProduct._id}`, { lower: true });
    const productsCategory = await Category.findOne({ name: product.category });
    newProduct.category = productsCategory._id;
    newProduct.save();
  }
  console.log("[Database] Se corrió el seeder de Products.");
};
