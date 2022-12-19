import * as C from './styles'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Link, useParams } from 'react-router-dom'
import { DiscussionEmbed } from 'disqus-react'
import { ArrowLeft } from 'phosphor-react'

export function NoticesDetails() {
  const [item, setItem] = useState([])
  const { postId } = useParams()

  useEffect(() => {
    try {
      api.get('comments').then((response) => {
        const item = response.data[postId - 1]
        setItem(item)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <C.Container>
      <C.Content>
        <Link to="/notices">
          <ArrowLeft size={32} weight="bold" style={{ display: 'inline-block' }} color="#245633" /> Voltar
        </Link>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </C.Content>
      <DiscussionEmbed shortname="test-ouqrdc3gfh" config={{ url: 'http://192.168.0.113:5173/notices', identifier: item.postId, title: item.title, language: 'pt_BR' }} key={item.id} />
    </C.Container>
  )
}