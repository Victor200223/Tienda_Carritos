import "./Tabla.css";
import { useContext, useState, useEffect } from "react";
import { CarritoContexto } from "../../App";
import { FiPlusCircle, FiMinusCircle, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import styled from "styled-components";

export const Tabla = () => {
  const { carrito, restar, sumar, eliminar, comprar } =
    useContext(CarritoContexto);

  const [estadoModal1, setEstadoModal1] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(true);
  const [estadoModal3, setEstadoModal3] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setEstadoModal3(false);
    }, 1000);
  });

  return (
    <div className="contenedor">
      <div className="contenedorTabla">
        Total:
        {  Object.values(carrito).reduce( (previo, actual) => actual ? previo + actual.cantidad * actual.precio : previo, 0   )   }
        <table className="tabla">
          <thead>
            <tr className="tr">
              <th>Producto</th>
              <th>Imagen</th>
              <th>Valor</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/*MODAL2.............................................................*/}
            {!Object.entries(carrito).length && (
              <Modal
                estado={estadoModal2}
                cambiarEstado={setEstadoModal2}
                mostrarHeader={true}
                mostrarOverlay={true}
              >
                <Contenido>
                  <h1>¡UPS!</h1>
                  <p>El carrito de compras se encuntra vacio.</p>
                  <Boton>
                    <Link to="/">Aceptar</Link>
                  </Boton>
                </Contenido>
              </Modal>
            )}
            {Object.entries(carrito).map(([id, producto]) => {
              const { nombre, precio, imagen, cantidad } = producto || {};

              return !producto ? null : (
                <tr key={id} className="tr">
                  <td>{nombre}</td>
                  <td>
                    <img
                      className="imagenCarrito"
                      src={`https://res.cloudinary.com/ddqxtzvyw/image/upload/v1639855230/Carrito_de_compras/${imagen}`}
                      alt="carro1"
                      id="imagen"
                    />
                  </td>
                  <td>{precio}</td>
                  <td className="cantidad">
                    <button
                      className="resta"
                      onClick={() => {
                        restar(id);
                      }}
                    >
                      <FiMinusCircle />
                    </button>
                    {cantidad}
                    <button
                      className="suma"
                      onClick={() => {
                        sumar(id);
                      }}
                    >
                      <FiPlusCircle />
                    </button>
                  </td>
                  <td>
                    <button
                      className="eliminar"
                      onClick={() => {
                        eliminar(id);
                        setEstadoModal3(!estadoModal3);
                      }}
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="contenedorBotonesCompra">
        {/* <p style={{ color: "#fff" }}>Total ${Total()}</p> */}
        <button className="seguirComprando">
          <Link to="/">Seguir Comprando</Link>
        </button>
        <div className="divcomprar">
          <button
            className="comprar"
            onClick={() => setEstadoModal1(!estadoModal1)}
          >
            Compra
          </button>
        </div>

        {/*MODAL1.............................................................*/}
        <Modal
          estado={estadoModal1}
          cambiarEstado={setEstadoModal1}
          titulo="SHUP"
          mostrarHeader={true}
          mostrarOverlay={true}
        >
          <Contenido>
            <h1>¡Gracias por tu compra!</h1>

            <Boton
              onClick={() => {
                comprar();
              }}
            >
              <Link to="/">Aceptar</Link>
            </Boton>
          </Contenido>
        </Modal>
      </div>
      {/*MODAL3.............................................................*/}
      <Modal
        estado={estadoModal3}
        cambiarEstado={setEstadoModal3}
        mostrarHeader={false}
        mostrarOverlay={false}
        posicionModal={`start`}
      >
        <Contenido>
          <h1>SHUP</h1>
          <p>¡Producto Eliminado!</p>
        </Contenido>
      </Modal>
    </div>
  );
};
export default Tabla;
const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: 1px solid #3d0000;
  background: #000;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    border: 1px solid #fff;
  }
`;
const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
  }

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
    text-align: center;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
    color: #fff;
  }
`;
