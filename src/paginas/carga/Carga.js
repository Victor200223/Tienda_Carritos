import "./Carga.css";
import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Carga = () => {
  return (
    <div className="contenedorCarga">
      <h1 className="titulo">
        SH<span className="spamTitulo">U</span>P
      </h1>
      <div>
        <Loader
          type="ThreeDots"
          color="#3d0000"
          height={100}
          width={100}
          timeout={3000} 
        />
      </div>
    </div>
  );
};
export default Carga;
