const Product = require("../models/Product");
const Category = require("../models/Category");
/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */
async function index(req, res) {
  const categories = await Category.find();
  return res.json({categories});
}

async function show(req, res) {
  const category = await Category.findOne({slug: req.params.slug});
  return res.json({category});
}


async function showAboutUs(req, res) {}

async function show404(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  showAboutUs,
};
