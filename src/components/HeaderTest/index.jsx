import * as C from "./styles";
import Logo from "../../assets/logo-adolfo.png";
import { css } from "@emotion/css";
import { useEffect } from "react";

export const HeaderTest = () => {
  function handleScrollEffect() {
    const nav = document.querySelector("#navbar");
    const logoHidden = document.querySelector("#logo");
    const ulMargin = document.querySelector("#ulItens");
    const schoolName = document.querySelector("#schoolName");

    const NavHidden = css`
      transform: translateY(calc(-1 * var(--nav-height)));
      min-height: 150px;

      display: flex;
      align-items: center;
    `;
    const LogoNav = css`
      display: none;
    `;

    const SchoolName = css`
      padding-top: 70px;
    `;

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add(NavHidden);
        logoHidden.classList.add(LogoNav);
        schoolName.classList.add(SchoolName);
      } else {
        nav.classList.remove(NavHidden);
        logoHidden.classList.remove(LogoNav);
        schoolName.classList.remove(SchoolName);
      }

      lastScrollY = window.scrollY;
    });
  }

  useEffect(() => {
    handleScrollEffect();
  }, []);

  return (
    <C.Container id="navbar">
      <a href="/notices">
        <img className="logo-header" id="logo" src={Logo} />
      </a>
      <h1 className="school-name" id="schoolName">
        EEEP adolfo ferreira de sousa
      </h1>
    </C.Container>
  );
};
