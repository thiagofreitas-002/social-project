import { useEffect } from 'react'

import * as C from './styles'

export function Posts({ item }) {
  function reveal() {
    window.effect = ScrollReveal({ reset: false })
    effect.reveal('.reveal', {
      duration: 20,
      delay: 50,
      distance: '100px',
      easing: 'ease-in-out',
      interval: 150,
      opacity: 0,
      scale: 0.75,
      origin: 'bottom',
      rotate: {
        x: 100,
        y: 0,
        z: 0,
      },
    })
  }

  useEffect(() => {
    reveal()
  }, [])

  const date = new Date(item.created_at)

  const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const formattedDate = dateFormatter.format(date)

  const parts = formattedDate.split(' ')
  const day = parts[0]
  const de = parts[1]
  const month = parts[2]
  const year = parts[4]
  const time = parts[5]

  return (
    <C.Container>
      <C.Time>
        <p>NOTÍCIAS</p> <time>{`${day} ${de} ${month} ${de} ${year} - ${time}`}</time>
      </C.Time>
      <C.Content>
        <h1>{item.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
      </C.Content>
    </C.Container>
  )
}
