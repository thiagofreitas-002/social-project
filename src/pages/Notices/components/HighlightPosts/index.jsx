import { Link } from 'react-router-dom'
import * as C from './styles'

export function HighlightPosts(props) {
  return (
    <Link to={`/notices/${props.id}`}>
      <C.Container url={props.url}>
        <h1>{props.title}</h1>
      </C.Container>
    </Link>
  )
}
