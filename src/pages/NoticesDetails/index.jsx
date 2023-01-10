import * as C from './styles'
import { useState, useEffect } from 'react'
import { apiProject } from '../../services/api'
import { Link, useParams } from 'react-router-dom'
import { DiscussionEmbed } from 'disqus-react'
import { ArrowLeft } from 'phosphor-react'
import Utterances from 'utterances-react'
import styled from '@emotion/styled'

export function NoticesDetails() {
  const [item, setItem] = useState([])
  const { postId } = useParams()

  useEffect(() => {
    try {
      apiProject.get(`/news/${postId}`).then((response) => {
        const item = response.data
        setItem(item)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <C.Container>
      <img src={item.image} alt="" />

      <C.Content>
        <h1 id="title">{item.title}</h1>

        <C.Comp>
          <C.TextContent>
            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>

            <Link to="/notices">Home</Link>
          </C.TextContent>

          <C.Comments>
            <Utterances repo="thiagofreitas-002/social-project" issueTerm="pathname" label="" theme="dark-blue" crossorigin="anonymous" async={false} />
          </C.Comments>
        </C.Comp>
      </C.Content>
    </C.Container>
  )
}
