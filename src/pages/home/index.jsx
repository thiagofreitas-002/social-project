import { Button } from '../../components/Button'
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

      <div className="button-container">
        <Button />
      </div>
    </C.Container>
  )
}
