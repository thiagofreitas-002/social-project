import * as C from './styles'

import { Link } from 'react-router-dom'
import { Home } from '../../pages/home'
import HandClick from '../../assets/iconhandclick.png'

export const Button = () => {
  return (
    <C.Container>
      <img src={HandClick} alt="" />
      <Link to={'/test'}>Noticias</Link>
    </C.Container>
  )
}
