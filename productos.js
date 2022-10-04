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

export default [
    new Producto('Cafetera Dolce Gusto', 24000,  [CAFETERAS], 'cafetera-dolce.webp', 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
    , new Producto('Cafetera', 39000,  [CAFETERAS], 'cafetera-oster.webp', 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
    , new Producto('Cápsulas Dolce Gusto Chococino', 2700, [CAPSULAS], 'capsulas-chococino.webp', 'oeaoieofjaio´jfeio´wjaio´fjiewoajfioéwjaifoejkoakfelñdksoaifoewnknfksdoñifedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnak')
    , new Producto('Cápsulas Dolce Gusto Lungos', 2700, [CAPSULAS], 'capsulas-lungo.webp', 'oeaoieofjaio´jfeio´wjaio´fjiewoajfioéwjaifoejkoakfelñdksoaifoewnknfksdoñifedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnak')
    , new Producto('Cápsulas Dolce Gusto Café con Leche', 2700, [CAPSULAS], 'capsulas-cafeconleche.webp', 'oeaoieofjaio´jfeio´wjaio´fjiewoajfioéwjaifoejkoakfelñdksoaifoewnknfksdoñifedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnak')
    , new Producto('Remera Vaso', 2700, [MERCHANDISING], 'remera-vaso.webp', 'oeaoieofjaio´jfeio´wjaio´fjiewoajfioéwjaifoejkoakfelñdksoaifoewnknfksdoñifedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnak')
    , new Producto('Remera Astronauta Luna', 2700, [MERCHANDISING], 'remera-astronauta-luna.webp', 'oeaoieofjaio´jfeio´wjaio´fjiewoajfioéwjaifoejkoakfelñdksoaifoewnknfksdoñifedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnak')
    , new Producto('Remera Astronauta Taza', 2700, [MERCHANDISING], 'remera-astronauta-cafe.webp', 'oeaoieofjaio´jfeio´wjaio´fjiewoajfioéwjaifoejkoakfelñdksoaifoewnknfksdoñifedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnak')
    , new Producto('Remera Casa Cafetera', 2700, [MERCHANDISING], 'remera-casa.webp', 'oeaoieofjaio´jfeio´wjaio´fjiewoajfioéwjaifoejkoakfelñdksoaifoewnknfksdoñifedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddnak')
]    