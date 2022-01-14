import React from "react";
import styled from "styled-components";
const Modal = ({
  children,
  estado,
  cambiarEstado,
  titulo = "SHUP",
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
}) => {
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <ContenedorModal>
            {mostrarHeader && (
              <>
                <EncabezadoModal>
                  <h1>{titulo}</h1>
                </EncabezadoModal>

                {/* <BotonCerrarModal onClick={() => cambiarEstado(false)}>
                  X
                </BotonCerrarModal> */}
              </>
            )}

            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};
export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.mostrarOverlay ? `rgba(0, 0, 0, 0.5)` : `rgba(0, 0, 0, 0)`};
  display: flex;
  padding: 40px;
  align-items: ${(props) =>
    props.posicionModal ? props.posicionModal : `center`};
  justify-content: center;
  tr
`;
const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  position: relative;
  background: #000;
  border-radius: 5px;
  box-shadow:#3d0000 -5px -5px 50px 10px;
  padding: 20px;
`;
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h1 {
    font-weight: 500;
    font-size: 16px;
    color: #3d0000;
  }
`;
// const BotonCerrarModal = styled.div`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 30px;
//   height: 30px;
//   border: none;
//   background: none;
//   transition: 0.3s ease all;
//   cursor: pointer;
//   border-radius: 5px;
//   color: #3d0000;
//   text-align: center;

//   &:hover {
//     background: #f2f2f2;
//   }
// `;
