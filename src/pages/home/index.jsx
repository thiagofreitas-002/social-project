import { Link } from 'react-router-dom'

import HandClick from '../../assets/iconhandclick.png'
import * as C from './styles'

export function Home() {
  return (
    <C.Container>
      <div className="content">
        <span className="title">SITE OFICIAL AFS</span>
        <h1>
          BEM<span className="vindo">VINDO</span>
        </h1>
      </div>

      <C.Button>
        <img src={HandClick} alt="" />
        <Link to={'/test'}>Notícias</Link>
      </C.Button>
    </C.Container>
  )
}
