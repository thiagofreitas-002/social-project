import { useEffect } from 'react'

import * as C from './styles'

export function Posts({items}) {
  function reveal() {
    window.effect = ScrollReveal({ reset: false })
    effect.reveal('.reveal', {
      duration: 200,
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

  return (
    <C.Container className="reveal">
      <h1>{items.title}</h1>
      <p>{items.description}</p>
    </C.Container>
  )
}
