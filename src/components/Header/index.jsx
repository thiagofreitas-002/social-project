import { useEffect } from 'react'
import { css } from '@emotion/css'
import * as C from './styles'

import Logo from "../../assets/logo-adolfo.png"

export function Header() {
  function handleScrollEffect() {
    const nav = document.querySelector('#navbar')
    const NavHidden = css`
      transform: translateY(calc(-1 * var(--nav-height)));
      /* opacity: 0.8; */
    `

    let lastScrollY = window.scrollY
    window.addEventListener('scroll', () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add(NavHidden)
      } else {
        nav.classList.remove(NavHidden)
      }

      lastScrollY = window.scrollY
    })
  }

  useEffect(() => {
    handleScrollEffect()
  }, [])

  return (
    <C.Container id="navbar">
      <h1>HEADER</h1>
    </C.Container>
  )
}
