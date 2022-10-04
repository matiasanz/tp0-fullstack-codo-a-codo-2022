class Producto{
    constructor(nombre, precio, categorias, imagen, descripcion){
        this.nombre=nombre
        this.categorias = categorias
        this.descripcion = descripcion
        this.precio = precio
        this.imagen = imagen
    }
}

const MERCHANDISING = 'Merchandising'
const CAFETERAS = 'Cafeteras'
const CAPSULAS = 'Cápsulas'

const descripcionDefault = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

export default [
    new Producto('Cafetera Dolce Gusto', 24000,  [CAFETERAS], 'cafetera-dolce.webp', descripcionDefault)
    , new Producto('Cafetera Oyster', 39000,  [CAFETERAS], 'cafetera-oster.webp', descripcionDefault)
    , new Producto('Cápsulas Dolce Gusto Chococino', 2700, [CAPSULAS], 'capsulas-chococino.webp', descripcionDefault)
    , new Producto('Cápsulas Dolce Gusto Lungos', 2700, [CAPSULAS], 'capsulas-lungo.webp', descripcionDefault)
    , new Producto('Cápsulas Dolce Gusto Café con Leche', 2700, [CAPSULAS], 'capsulas-cafeconleche.webp', descripcionDefault)
    , new Producto('Remera Vaso', 2700, [MERCHANDISING], 'remera-vaso.webp', descripcionDefault)
    , new Producto('Remera Astronauta Luna', 2700, [MERCHANDISING], 'remera-astronauta-luna.webp', descripcionDefault)
    , new Producto('Remera Astronauta Taza', 2700, [MERCHANDISING], 'remera-astronauta-cafe.webp', descripcionDefault)
    , new Producto('Remera Casa Cafetera', 2700, [MERCHANDISING], 'remera-casa.webp', descripcionDefault)
]    