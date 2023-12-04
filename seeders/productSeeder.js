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
      description: " Éste café es dulce, de acidez baja, con aromas a frutos rojos y amarillos, que nos hace viajar hasta las montañas de Minas Gerais donde es producido. Notas: Frutal, caramelo, dulce.",
      photo: ["cafe-en-grano.png"],
      price: "630",
      stock: 49,
      category: "Café",
      featured: true,
      shortDescription: "Café en grano / 250g",
    },
    // {
    //   name: "Bolistas",
    //   description: "Es el producto ideal para ella!",
    //   photo: ["bolistas.png"],
    //   price: "400",
    //   stock: 37,
    //   category: "Merch",
    //   featured: false,
    // },
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
      description: "Material: acero inoxidable. Incluye tapa. Cuenta con doble pared de aislamiento. Es libre de BPA. Es apto para lavavajillas. Conserva tus bebidas a una temperatura ideal.",
      photo: ["jarra-termica.png"],
      price: "900",
      stock: 37,
      category: "Merch",
      featured: true,
      shortDescription: "Vaso térmico con doble pared de aislamiento"
    },
    {
      name: "Vaso",
      description: "Vaso descartable, biodegradable, hecho con materiales reciclados. Incluye tapa",
      photo: ["vaso.png"],
      price: "50",
      stock: 37,
      category: "Merch",
      featured: true,
      shortDescription: "Vaso descartable biodegradable"
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
