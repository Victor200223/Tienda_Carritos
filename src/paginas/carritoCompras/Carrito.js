import "./Carrito.css";
import Tabla from "../../componentes/tablaCarrito/Tabla";
function Carrito() {
  return (
    <div>
      <h1 className="tituloCarrito">
        SHUP<span className="spanCarrito">CAR</span>
      </h1>
      <div>{<Tabla />}</div>
      <div>
        Total:
      </div>
    </div>
  );
}
export default Carrito;
