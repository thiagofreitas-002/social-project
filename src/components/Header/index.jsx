import { css } from '@emotion/css'
import { useEffect } from 'react'

import Logo from '../../assets/logo_adolfo.png'
import * as C from './styles'

export function Header() {
  function handleScrollY() {
    const nav = document.querySelector('#navbar')

    const NavHidden = css`


      height: 4rem !important;
       gap: 0rem !important;

      & a img {
        
      transform: translateX(60px);
      transform: translateX(-300px);
      

      }
     
    `

    window.addEventListener('scroll', () => {
      let scroll = window.scrollY
      switch (scroll) {
        case 0:
          nav?.classList.remove(NavHidden)
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
    <C.Container className='teste' id="navbar">
      <a href="/notices" id="logo">
        <img src={Logo} />
      </a>

      <h1 id="schoolName">EEEP adolfo ferreira de sousa</h1>
    </C.Container>
  )
}
