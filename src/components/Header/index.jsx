import { css } from '@emotion/css'
import { useEffect } from 'react'

import Logo from '../../assets/logo-adolfo.png'
import * as C from './styles'

export function Header() {
  function handleScrollEffect() {
    const nav = document.querySelector('#navbar')
    const logoHidden = document.querySelector('#logo')
    const schoolName = document.querySelector('#schoolName')

    const NavHidden = css`
      transform: translateY(calc(-1 * var(--nav-height)));
      max-height: 9.375rem;
      justify-content: center !important;
    `
    const LogoNav = css`
      opacity: 0;
      visibility: hidden;

      img {
        display: none;
      }
    `

    const SchoolName = css`
      padding-top: 4.375rem;
    `

    let lastScrollY = window.scrollY
    window.addEventListener('scroll', () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add(NavHidden)
        logoHidden.classList.add(LogoNav)
        schoolName.classList.add(SchoolName)
      } else {
        nav.classList.remove(NavHidden)
        logoHidden.classList.remove(LogoNav)
        schoolName.classList.remove(SchoolName)
      }

      lastScrollY = window.scrollY
    })
  }

  useEffect(() => {
    handleScrollEffect()
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
