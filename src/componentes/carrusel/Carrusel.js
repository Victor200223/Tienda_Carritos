import "./Carrusel.css";
import Imagenes from "./../../recursos/imagenes/Imagenes";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
function Carrusel() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="zoom-in-down" className="contenedorCarrusel">
      <ul>
        <li>
          <img className="img-carrusel" src={Imagenes[0].img} />
        </li>
        <li>
          <img className="img-carrusel" src={Imagenes[1].img} />
        </li>
        <li>
          <img className="img-carrusel" src={Imagenes[2].img} />
        </li>
        <li>
          <img className="img-carrusel" src={Imagenes[3].img} />
        </li>
      </ul>
    </div>
  );
}
export default Carrusel;
