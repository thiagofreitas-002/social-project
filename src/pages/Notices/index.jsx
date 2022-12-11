import { BoxText } from './components/BoxText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import * as C from './styles'

export const Notices = () => {
  return (
    <>
      <Header />
      <C.Container>
        <C.BoxContainer>
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
          <BoxText />
        </C.BoxContainer>

        <C.Menu>
          <C.MenuContent>Testando</C.MenuContent>
        </C.Menu>
      </C.Container>
      <Footer />
    </>
  )
}
