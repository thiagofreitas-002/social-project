import { css } from '@emotion/css'
import { useEffect } from 'react'

import Logo from '../../assets/logo_adolfo.png'
import * as C from './styles'

export function Header() {
  function handleScrollY() {
    const nav = document.querySelector('#navbar')
    console.log(nav)
    // let scroll = window.scrollY

    const NavHidden = css`
      height: 4rem !important;

      h1 {
        margin: auto !important;
      }

      & a img {
        display: none !important;
      }
    `

    window.addEventListener('scroll', () => {
      switch (window.scrollY) {
        case 0:
          nav?.classList.remove(NavHidden)
          console.log('foi')
          break
        default:
          nav.classList.add(NavHidden)
          break
      }
    })
  }

  useEffect(() => {
    handleScrollY()
  }, [])

  return (
    <C.Container id="navbar">
      <a href="/notices" id="logo">
        <img src={Logo} />
      </a>

      <h1 id="schoolName">EEEP adolfo ferreira de sousa</h1>
    </C.Container>
  )
}
