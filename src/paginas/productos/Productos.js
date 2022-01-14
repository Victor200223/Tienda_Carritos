import "./Productos.css";
import Carrusel from "../../componentes/carrusel/Carrusel";
import productosDatos from "../../datos/productosDatos";
import ProductosItem from "../../componentes/productositems/Items";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";
import Aos from "aos";
import { CarritoContexto } from "../../App";

function Productos() {
  const { carrito } = useContext(CarritoContexto);

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="contenedorPaginaProductos">
      <h1 data-aos="zoom-in-down" className="tituloProductos">
        SH
        <span className="spamTituloProductos">
          <Link to="/Carrito">
            <HiShoppingCart />
          </Link>
        </span>
        P 
        <span className="contador">
          <Link to="/Carrito">
            {Object.keys(carrito).reduce(
              (previo, actual, index, array) =>
                carrito[array[index]] ? previo + 1 : previo,
              0
            )}
          </Link>
        </span>
      </h1>

      <div className="Carrusel">{<Carrusel />}</div>
      <div id="productos" className="productosContenedor">
        {productosDatos.productos.map((item) => (
          <ProductosItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
export default Productos;
