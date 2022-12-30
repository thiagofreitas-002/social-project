import * as C from "./styles";
import Logo from "../../assets/logo_adolfo.png";
import { InstagramLogo, Envelope } from "phosphor-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <C.Container>
      <Link to="/notices"></Link>

      <C.Copyright>
        <p
          onClick={() => {
            const list = document.getElementById("ul");
            document.getElementById("copyright").style.cursor = "default";
            list.style.display = "grid";
            list.style.cursor = "default";
            setTimeout(() => {
              list.style.transform = "scaleY(1)";
            }, 50);
          }}
          id="copyright"
        >
          &copy; Turma de Informática 2020-2022
        </p>
        <ul id="ul">
          <li className="list_item">Artur Bruno</li>
          <li className="list_item">Antônio Vitor</li>
          <li className="list_item">Fabrício</li>
          <li className="list_item">Helyel</li>
          <li className="list_item">João Marcelo</li>
          <li className="list_item">João Matheus</li>
          <li className="list_item">Kauã Martins</li>
          <li className="list_item">Leo Maycom</li>
          <li className="list_item">Matheus Castro</li>
          <li className="list_item">Carlos Natanael</li>
          <li className="list_item">João Pedro</li>
          <li className="list_item">Thiago Freitas</li>
          <li className="list_item">José Carlos</li>
          <li className="list_item">Fernando Erikson</li>
        </ul>
      </C.Copyright>

      <C.Bloco>
        <C.OtherPages>
          <h3>Navegue</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/perguntas">Perguntas(FAQ)</Link>
            </li>
          </ul>
        </C.OtherPages>

        <C.SocialMedia>
          <h3>Contato</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/adolfoferreiraoficial/">
                <InstagramLogo size={32} color="#005e1a" />
              </a>
            </li>

            <li>
              <a href="mailto:adolfofs@escola.ce.gov.br">
                <Envelope size={32} color="#005e1a" />
              </a>
            </li>
          </ul>
        </C.SocialMedia>
      </C.Bloco>
    </C.Container>
  );
}
