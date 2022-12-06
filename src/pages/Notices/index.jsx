import { BoxText } from '../../components/BoxText'
import * as C from './styles'

export const Notices = () => {
  return (
    <C.Container>
      <C.BoxContainer>
        <BoxText />
        <BoxText />
      </C.BoxContainer>
      <C.Menu />
    </C.Container>
  )
}