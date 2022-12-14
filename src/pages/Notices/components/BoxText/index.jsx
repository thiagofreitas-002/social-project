import { useEffect } from 'react'

import * as C from './styles'

export function BoxText({ title, paragraph }) {
  function reveal() {
    window.effect = ScrollReveal({ reset: false })
    const mods = {
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
    }

    effect.reveal('.reveal', mods)
  }

  useEffect(() => {
    reveal()
  }, [])

  return (
    <C.Container className="reveal">
      <C.TitleBox>{title}</C.TitleBox>
      <C.TextBox>{paragraph}</C.TextBox>
    </C.Container>
  )
}
