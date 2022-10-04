import productos from './productos.js'

        const formatoPrecio = precio => precio.toLocaleString(undefined, { minimumFractionDigits: 2 , maximumFractionDigits: 2})

        function dibujarProductos(productos){
            let listadoProductos = ''
            for(let i=1; i<=productos.length; i++){
                const producto = productos[i-1]
                listadoProductos += `
                    <article id="producto${i}" class="producto">
                        <div class="box-img">
                            <img class="producto--img" src="/assets/productos/${producto.imagen}">
                        </div>
                        <div class="producto--datos">
                            <h3 class="producto--nombre">${producto.nombre}</h3>
                            <p>$${formatoPrecio(producto.precio)}</p>
                        </div>
                    </article>    
                `
            }

            document.getElementById('contenedor-productos').innerHTML=(listadoProductos)
        }
        
        dibujarProductos(productos)

        function filtrarPorNombre(productos, nombre){
            const regex = new RegExp(".*"+nombre + ".*")
            return nombre == ''? productos: productos.filter(p=>regex.test(p.nombre)) 
        }

        function filtrarPorCategoria(productos, categoria){
            const CUALQUIERA = 'Todas'
            return categoria===CUALQUIERA? productos: productos.filter(p=>p.categorias.includes(categoria))
        }

        function aplicarFiltros(){
            dibujarProductos(
                filtrarPorCategoria(
                    filtrarPorNombre(productos, filtro_nombre.value??".*")
                    , filtro_categoria.value
                )    
            )
        }

        /****** Inicializar ******/

        function cargarCategorias(){
            let opciones = ''
            const categorias = productos.flatMap(p=>p.categorias)
            new Set(categorias).forEach(categoria=>{
                opciones+= `
                    <option value="${categoria}">${categoria}</option>
                `
            })

            filtro_categoria.innerHTML+=opciones
        }

        [filtro_nombre, filtro_categoria].forEach(f=>f.addEventListener('input',ev => aplicarFiltros()))

        cargarCategorias()