import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carga from "./paginas/carga/Carga";
import Productos from "./paginas/productos/Productos";
import Carrito from "./paginas/carritoCompras/Carrito";
import { useState, useEffect, createContext } from "react";
import Modal from "./componentes/modal/Modal";
import styled from "styled-components";

export const CarritoContexto = createContext();
const CarritoProveedor = CarritoContexto.Provider;

function App() {
  const [estadoModal3, setEstadoModal3] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [cargando, setCarga] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCarga(false);
    }, 2500);
  });
  useEffect(() => {
    setTimeout(() => {
      setEstadoModal2(false);
      setEstadoModal3(false);
    }, 1000);
  });
  const [carrito, setCarrito] = useState({});

  const sumar = (id) => {
    return setCarrito({
      ...carrito,
      [id]: {
        ...carrito[id],
        cantidad: carrito[id].cantidad + 1,
      },
    });
  };
  const restar = (id) => {
    if (carrito[id].cantidad <= 1) {
      setEstadoModal2(true);
      return eliminar(id);
    }
    if (carrito[id]) {
      return setCarrito({
        ...carrito,
        [id]: {
          ...carrito[id],
          cantidad: carrito[id].cantidad - 1,
        },
      });
    }

    setCarrito({});
  };

  const eliminar = (id) => {
    setCarrito({ ...carrito, [id]: null });
  };
  const comprar = (carrito) => {
    setCarrito({ carrito });
  };
  const alerta = () => {
    setEstadoModal3(false);
  };
  const alerta2 = () => {
    setEstadoModal2(false);
  };
  const agregarAlCarrito = (id, producto) => {
    if (carrito[id]) {
      return setCarrito({
        ...carrito,
        [id]: {
          ...carrito[id],
          cantidad: carrito[id].cantidad + 1,
        },
      });
    }
    setEstadoModal3(true);
    setCarrito({
      ...carrito,
      [id]: {
        ...producto,
        cantidad: 1,
      },
    });
  };

  return (
    <div>
      <CarritoProveedor
        value={{
          carrito,
          agregarAlCarrito,
          restar,
          sumar,
          eliminar,
          comprar,
          alerta,
          // Total,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={cargando ? <Carga /> : <Productos />} />
            <Route
              path="Productos"
              element={cargando ? <Carga /> : <Productos />}
            />
            <Route
              path="Carrito"
              element={cargando ? <Carga /> : <Carrito />}
            />
          </Routes>
        </Router>
      </CarritoProveedor>
      <Modal
        mostrarAlerta={alerta}
        estado={estadoModal3}
        cambiarEstado={setEstadoModal3}
        mostrarOverlay={false}
        mostrarHeader={false}
      >
        <Contenido>
          <h1>SHUP</h1>
          <p>¡Producto Agregado al Carrito!</p>
        </Contenido>
      </Modal>

      <Modal
        mostrarAlerta={alerta2}
        estado={estadoModal2}
        cambiarEstado={setEstadoModal2}
        mostrarOverlay={false}
        mostrarHeader={false}
        posicionModal={`start`}
      >
        <Contenido>
          <h1>SHUP</h1>
          <p>¡Producto Eliminadosad!</p>
        </Contenido>
      </Modal>
    </div>
  );
}

export default App;
const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
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
