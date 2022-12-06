import { BoxText } from '../../components/BoxText'
import { Header } from '../../components/Header'
import * as C from './styles'

export const Notices = () => {
  return (
    <C.Container>
      <Header />
      <C.BoxContainer>
        <BoxText />
        <BoxText />
      </C.BoxContainer>
      <C.Menu />
    </C.Container>
  )
}
