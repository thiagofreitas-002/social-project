import * as C from "./styles";
import Logo from "../../assets/logo-adolfo.png";
import { InstagramLogo, Envelope } from "phosphor-react";

export function Footer() {
  return (
    <C.Container>
      <div>
        <div>
          <a href="notices">
            <img
              src={Logo}
              style={{ width: "8rem", aspectRatio: 1 / 1, objectFit: "cover " }}
            />
          </a>
        </div>
      </div>

      <C.Bloco>
        <div className="bloco1">
          <h3>Navegue</h3>
          <hr />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/Perguntas">Perguntas(FAQ)</a>
            </li>
          </ul>
        </div>

        <div className="bloco2">
          <h3>Contato</h3>
          <hr />
          <ul>
            <li>
              <a href="">
                <InstagramLogo size={32} />
              </a>
            </li>

            <li>
              <a href="">
                <Envelope size={32} />
              </a>
            </li>
          </ul>
        </div>
      </C.Bloco>
    </C.Container>
  );
}
