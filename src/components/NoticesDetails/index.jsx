import * as C from './styles'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useParams } from 'react-router-dom'
import { DiscussionEmbed, Recommendations } from 'disqus-react'

export function NoticesDetails() {
  /* const [currentPost, setCurrentPost] = useState(null)
  const params = useParams()

  async function getData() {
    try {
      const response = await api.get('/comments').then((response) => {
        console.log(response.data)
        setCurrentPost(response.data)
      })

      response.find((post) => {
        setCurrentPost(post)
      })
    } catch (error) {
      console.log(error)
    }
  } */

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
    postId.toString(0)
  }, [])

  return (
    <C.Container>
      <C.Content>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </C.Content>
      <DiscussionEmbed shortname="test-ouqrdc3gfh" config={{ url: 'http://192.168.0.113:5173/notices', identifier: item.postId, title: item.title, language: 'pt_BR' }} key={item.id} />
    </C.Container>
  )
}
