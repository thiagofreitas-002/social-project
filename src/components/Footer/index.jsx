import * as C from './styles'
import Logo from '../../assets/logo_adolfo.png'
import { InstagramLogo, Envelope } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <C.Container>
      <Link to="/notices"></Link>

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
  )
}
