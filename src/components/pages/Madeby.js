import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./css/madeby.css";

function Madeby() {
  return (
    <div className="container">
      <div className="left">
        <i class="fas fa-solid fa-code fa-5x c"></i> 
        <h3 className="name">Hazi Amine Mohamed</h3>
        <h5>202031066804</h5>
        <ul className="list">
          <li>
            Solution pour les parties I, II, et III
          </li>
          <li>
            Maquette du code en JavaScript.
          </li>
          <li>
            Rédaction du rapport.
          </li>
        </ul>
      </div>
      <div className="mid"><i class="fas fa-solid fa-laptop-code fa-5x c"></i>
        <h3>Boussaha Meriem</h3> 
        <h5><br/>1831072194</h5>
        <ul className="list">
          <li>
            Implementation de la solution final en une application web avec React.
          </li>
          <li>
            Test du code et de la solution web.
          </li>
          <li>
            Recherche et collecte de ressources.
          </li>
        </ul>
        </div>
      <div className="right"><i class="fas fa-solid fa-code-branch fa-5x c"></i> 
        <h3>Arabi Mohamed Zakaria</h3>
        <h5>202031043777</h5>
        <ul className="list">          
          <li>
            Recherche et collecte de ressources.
          </li>
          <li>
            test des solutions et détection de bug.
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Madeby