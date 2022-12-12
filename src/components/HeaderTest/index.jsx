import * as C from "./styles"
import Logo from "../../assets/logo-adolfo.png"
import { css } from '@emotion/css'
import { useEffect } from "react"

export const HeaderTest = () => {

    function handleScrollEffect() {
        const nav = document.querySelector('#navbar')
        const logoHidden = document.querySelector("#logo")
        const ulMargin = document.querySelector("#ulItens")
        const schoolName = document.querySelector("#schoolName")

        const NavHidden = css`
          transform: translateY(calc(-1 * var(--nav-height)));
          min-height: 150px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          /* opacity: 0.8; */
        `
        const LogoNav = css`
            display: none;
        `;

        const UlNav = css`
            padding-top: 70px; 
            display: flex;
            align-items: center;
        `;

        const SchoolName = css`
          padding-top: 70px;
          padding-left: 10rem;
          text-align: center;
        `;
    
        let lastScrollY = window.scrollY
        window.addEventListener('scroll', () => {
          if (lastScrollY < window.scrollY) {
            nav.classList.add(NavHidden)
            logoHidden.classList.add(LogoNav)
            ulMargin.classList.add(UlNav)
            schoolName.classList.add(SchoolName)
          } else {
              nav.classList.remove(NavHidden)
              logoHidden.classList.remove(LogoNav)
              ulMargin.classList.remove(UlNav)
              schoolName.classList.remove(SchoolName)
          }
    
          lastScrollY = window.scrollY
        })
      }
    
      useEffect(() => {
        handleScrollEffect()
      }, [])

    return(
        <C.Container id="navbar">
            <a href="/notices"><img className="logo-header" id="logo" src={Logo}/></a>
            <h1 className="school-name" id="schoolName">EEEP adolfo ferreira de sousa</h1>
            <nav className="nav-bar">
                <ul id="ulItens">
                    <a href="#about">Sobre</a>
                </ul>
            </nav>
        </C.Container>
    )
}