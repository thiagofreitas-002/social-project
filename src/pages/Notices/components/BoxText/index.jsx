import { useEffect } from 'react'
import * as C from './styles'

export const BoxText = () => {
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
      <C.TitleBox>TITULO</C.TitleBox>
      <C.TextBox>O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada.</C.TextBox>
    </C.Container>
  )
}
