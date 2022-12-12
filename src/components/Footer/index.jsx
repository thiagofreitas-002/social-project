import * as C from './styles'
import Logo from '../../assets/logo-adolfo.png'
import { InstagramLogo, Envelope } from 'phosphor-react'

export function Footer() {
  return (
    <C.Container>
      <div>
        <div>
          <a href="notices">
            <img src={Logo} style={{ width: '8rem', aspectRatio: 1 / 1, objectFit: 'cover ' }} />
          </a>
        </div>
      </div>

      <C.Bloco>
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
      </C.Bloco>

      <C.Bloco>
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
      </C.Bloco>
    </C.Container>
  )
}
