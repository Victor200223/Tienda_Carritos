import "./Items.css";
import { useContext, useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { CarritoContexto } from "../../App";
import "aos/dist/aos.css";
import Aos from "aos";

export const ProductosItem = ({ data: { id, imagen, nombre, precio } }) => {
  const { agregarAlCarrito } = useContext(CarritoContexto);
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div data-aos="zoom-in-down" className="contenedoritems">
      <div className="contenedorImagenItem">
        <img
          className="imagenItem"
          src={`https://res.cloudinary.com/ddqxtzvyw/image/upload/v1639855230/Carrito_de_compras/${imagen}`}
          alt="carro1"
          id="imagen"
        />
      </div>
      <div id="nombreProducto">
        <h3 className="nombreitem">{nombre}</h3>
      </div>
      <div className="contenedorPrecioBoton">
        <div id="precioProducto" className="precioItem">
          <h2>
            <i class="fas fa-dollar-sign"></i>
            <span class="precio"> {precio} </span>
          </h2>
        </div>

        <div className="botonItem">
          <button
            className="agregarCarrito"
            onClick={
              () => {agregarAlCarrito(id, { nombre, precio, imagen })}}>
            <HiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductosItem;
