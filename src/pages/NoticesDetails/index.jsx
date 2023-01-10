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
      <img src={/* item.image */ 'https://cdn.waifu.im/6393.png'} alt="" />

      <C.Content>
        <h1 id="title">
          {item.title}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, explicabo. Dolores tempora deleniti saepe consectetur distinctio amet vel, odit dicta, laborum iusto nam eveniet id voluptatibus quibusdam porro nisi tempore.
        </h1>

        <C.Comp>
          <C.TextContent>
            <p /* dangerouslySetInnerHTML={{ __html: item.description }} */>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sequi ut doloribus explicabo, dicta vitae beatae expedita fuga earum corrupti modi fugiat harum perferendis autem quibusdam asperiores odit! Vero, porro.</p>

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
